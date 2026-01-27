const { build, context } = require("esbuild")
const { copy } = require("esbuild-plugin-copy")
const fs = require("fs")
const path = require("path")
const yaml = require("js-yaml")
const encodeQR = require("qr").default

const entryPoints = [
    "src/*.html",
    "src/*.tldrev",
    "src/*.md",
    "src/index.ts"
]

// Load substitutions from _config.yml
function getSubstitutions() {
    const extConfigPath = path.resolve(__dirname, "../syllabus/_config_ext.yml")
    const baseConfigPath = path.resolve(__dirname, "../syllabus/_config.yml")
    let configPath
    if (fs.existsSync(extConfigPath)) {
        configPath = extConfigPath
    } else {
        configPath = baseConfigPath
    }
    const config = yaml.load(fs.readFileSync(configPath, "utf8"))
    return (
        config?.sphinx?.config?.myst_substitutions
        || {}
    )
}

// esbuild plugin for QR code generation and substitution
function mdHtmlTransformPlugin() {
    return {
        name: "md-html-transform",
        setup(build) {
            const substitutions = getSubstitutions()
            build.onLoad({ filter: /\.(md|html)$/ }, async (args) => {
                let content = await fs.promises.readFile(args.path, "utf8")
                const warnings = []
                
                // First pass: Substitution - replace {{ key }} with values
                const substRegex = /\{\{\s*(\w+)\s*\}\}/g
                let match
                let newContent = ""
                let lastIndex = 0
                while ((match = substRegex.exec(content)) !== null) {
                    const [fullMatch, key] = match
                    const start = match.index
                    const end = substRegex.lastIndex
                    newContent += content.slice(lastIndex, start)
                    if (substitutions[key] === undefined) {
                        // Find line/column for warning
                        const before = content.slice(0, start)
                        const lines = before.split("\n")
                        const lineNum = lines.length
                        const lineText = lines[lines.length - 1] + content.slice(start, end)
                        const colNum = Buffer.byteLength(lines[lines.length - 1], "utf8")
                        warnings.push({
                            text: `Substitution key '${key}' not found in myst_substitutions`,
                            location: {
                                file: args.path,
                                namespace: "file",
                                line: lineNum,
                                column: colNum,
                                length: Buffer.byteLength(fullMatch, "utf8"),
                                lineText
                            }
                        })
                        newContent += fullMatch
                    } else {
                        newContent += substitutions[key]
                    }
                    lastIndex = end
                }
                newContent += content.slice(lastIndex)
                content = newContent
                
                // Second pass: QR code generation - replace {# text #} with QR codes
                let qrRegex = /\{#\s*(.*?)\s*#\}/g
                newContent = ""
                lastIndex = 0
                while ((match = qrRegex.exec(content)) !== null) {
                    const [fullMatch, qrText] = match
                    const start = match.index
                    const end = qrRegex.lastIndex
                    newContent += content.slice(lastIndex, start)
                    // Generate QR code as GIF bytes
                    const gifBytes = encodeQR(qrText, "gif", { scale: 4 })
                    const base64Data = Buffer.from(gifBytes).toString("base64")
                    const imgTag = `<img src="data:image/gif;base64,${base64Data}" alt="QR code for ${qrText}" />`
                    newContent += imgTag
                    lastIndex = end
                }
                newContent += content.slice(lastIndex)
                
                return {
                    contents: newContent,
                    loader: "copy",
                    warnings
                }
            })
        }
    }
}

function config(isProduction) {
    return {
        entryPoints,
        outdir: "dist",
        bundle: true,
        sourcemap: true,
        loader: {
            ".woff": "file",
            ".eot": "file",
            ".ttf": "file",
            ".html": "copy",
            ".tldrev": "copy",
            ".md": "copy"
        },
        plugins: [
            mdHtmlTransformPlugin(),
            copy({
                assets: {
                    from: [ "./src/assets/**/*" ],
                    to: [ "./assets" ]
                }
            })
        ],
        define: {
            "process.env.NODE_ENV": isProduction ? "\"production\"" : "\"dev\"",
            "process.env.IS_PREACT": "\"false\""
        },
        logLevel: "info"
    }
}

switch (process.argv[2]) {
    case "serve":
        (async () => {
            const ctx = await context({
                ...config(false),
                inject: [ "live-reload.js" ]
            })
            await ctx.watch()
            await ctx.serve({
                servedir: "dist"
            })
        })()
        break;
    case "build":
        build({
            ...config(true),
            minify: true
        })
        break;
    default:
        console.warn("Specify either serve or build as an argument.")
        break;
}
