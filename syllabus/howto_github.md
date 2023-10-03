# Werken met GitHub

Als je via [GitHub Classroom](startopdracht.md#bijlage-een-github-classroom-team-aanmaken) een team hebt aangemaakt of je bij een team hebt aangesloten, kom je uiteindelijk op een pagina zoals deze:

![Homepagina van een GitHub repository.](assets/howto_github/image-20230920172834814.png)

Dit is de hoofdpagina van jullie *repository*. Dat is de naam die in Git gebruikt wordt voor een map die je deelt met teamgenoten en waarvan de geschiedenis wordt bijgehouden. Om aan de code te werken, is het handig om die op je eigen laptop te hebben. Daarvoor maken we gebruik van [GitHub Desktop](https://desktop.github.com), dus installeer dat als je dat nog niet gedaan had.

:::{note}

Ben je al bekend met Git of GitHub? Gebruik je graag de command line of de Git-integratie in je favoriete editor of IDE? Allemaal prima, dat werkt gewoon, ook als je teamgenoten de uitleg volgen die hier gegeven is.

:::

Om je repository te openen in GitHub Desktop, klik je op de website op de groene knop ![Code](assets/howto_github/image-20230920173453450.png) en vervolgens kies je de optie *Open with GitHub Desktop*:

![Open with GitHub Desktop is een optie die verschijnt nadat je op de knop Code hebt geklikt](assets/howto_github/image-20230920173414817.png)

GitHub Desktop wordt dan geopend en het volgende venster verschijnt:

![Dialoogvenster van GitHub Desktop "Clone a repository"](assets/howto_github/image-20230926125120181.png)

In het eerste veld staat de URL van de repository, dus daar hoef je niets mee te doen. In het tweede veld staat de map op jouw computer waar de bestanden uit de repository opgeslagen zullen worden. Je kunt de standaard plek laten staan, of een andere locatie kiezen met knop *Choose*. Onthoud in elk geval waar je bestanden terecht komen! Klik op de knop *Clone* om de repository naar jouw computer te kopiëren. Als dat klaar is, verschijnt het volgende venster:

![Homepagina van GitHub Desktop. In de bovenste balk staat rechts een knop voor fetch/push/pull. In het middelste vlak staat een knop "Show in Explorer" waarmee je de map in de Windows Verkenner kunt openen. Aan de linkerkant staat een balk met de lijst van gewijzigde bestanden. Onderin staat een vak waarin je je wijzigingen beschrijft en ze toevoegt aan Git.](assets/howto_github/image-20230926211007927.png)

## Jouw wijzigingen delen

Als je wijzigingen in je bestanden hebt gemaakt en je komt terug in GitHub Desktop, dan zie je in de linkerbalk de lijst van bestanden waar wijzigingen in zijn: met een geel bolletje betekent een bewerkt bestand, een groen plusje duidt op een nieuw bestand en een rood minnetje is een verwijderd bestand. Door op die bestanden te klikken, zie je aan de rechterkant de wijzigingen in dat bestand.

![Links de lijst van gewijzigde bestanden, rechts de wijzigingen in het bestand. Daarbij is groene tekst de nieuw toegevoegde tekst en rode tekst de oude verwijderde tekst.](assets/howto_github/image-20231003101457467.png)

Om die wijzigingen te delen met je teamgenoten, geef je bij *Summary* een korte beschrijving van je wijzigingen. Als je vervolgens op de knop *Commit to main* klikt, worden je wijzigingen opgeslagen in Git. Je wijzigingen zijn nog niet gedeeld met je teamgenoten, maar je kunt deze versie van je project nu wel altijd terugvinden.

![Een beschrijving van de wijzigingen in het Summary veld, met daaronder de blauwe Commit to main knop.](assets/howto_github/image-20231003101910330.png)

GitHub Desktop vertelt je nu dat er geen lokale wijzigingen meer zijn (dus geen wijzigingen die je nog niet aan Git hebt toegevoegd). De fetch/push/pull knop is veranderd in *Push origin*, met een 1 en een pijltje omhoog ernaast. Dat betekent dat je één commit op je computer hebt, die je nog niet naar GitHub hebt gestuurd. Als je op die knop klikt, stuur je jouw wijzigingen naar GitHub en kunnen je teamgenoten ze daar ook vinden.

![GitHub Desktop ziet dat er lokale commits zijn die je nog niet gedeeld hebt en geeft dus Push origin als hoofdactie op de fetch/push/pull knop.](assets/howto_github/image-20231003102044894.png)

## Wijzigingen van teamgenoten ophalen

Als je wilt kijken of één van je teamgenoten wijzigingen naar GitHub heeft gestuurd, dan klik je op de *Fetch origin* knop. Daarmee worden wijzigingen die op GitHub staan opgehaald, maar nog niet toegepast op de bestanden die op jouw computer staan.

![Fetch origin knop](assets/howto_github/image-20231003115443377.png)

Als er wijzigingen beschikbaar zijn, dan verandert de knop daarna in een *Pull origin* knop. Je ziet aan de rechterkant een 1 met een pijltje naar beneden staan. Dat betekent dat er één commit op GitHub beschikbaar is met wijzigingen die nog niet op jouw computer staan. Als je op deze knop klikt, dan worden die wijzigingen opgehaald en toegepast op de bestanden op jouw computer.

![Pull origin knop](assets/howto_github/image-20231003115739284.png)

Let op: je kunt alleen wijzigingen ophalen als er geen lokale wijzigingen zijn die je nog niet aan Git hebt toegevoegd (dus in GitHub Desktop moet groot "No local changes" zichtbaar zijn). Als je met lokale wijzigingen toch op *Pull origin* klikt, krijg je deze foutmelding:

![Error: Unable to pull when changes are present on your branch. The following files would be overwritten: ander_bestand.txt You can stash your changes now and recover them afterwards. In de pop-up staan twee knoppen: Stash changes and continue en Close](assets/howto_github/image-20231003120242551.png)

De beste oplossing is om hier op *Close* te klikken en je werk te committen en pas daarna te pullen. Je kunt ook gebruik maken van de *stash*, maar daar gaan we hier niet op in.

## Geschiedenis bekijken

Het mooie van Git is ook dat je alle oude versies van het project terug kunt vinden. Klik daarvoor op de knop *History* bovenin de balk aan de linkerkant:

![History weergave in GitHub Desktop. Links staat de lijst van commits, daarnaast de bestanden die in de geselecteerde commit gewijzigd zijn en weer daarnaast de diff van het geselecteerde bestand.](assets/howto_github/image-20231003123844777.png)

Om terug te gaan naar het standaard venster, klik je op de knop *Changes*.

## Wijzigingen tegelijkertijd

Het kan natuurlijk gebeuren dat meerdere personen tegelijkertijd wijzigingen maken. Als je een of meerdere lokale commits hebt en iemand anders heeft al op GitHub commits gemaakt, dan ziet de *Pull origin* knop er zo uit:

![Pull origin knop, met 1 pijltje omhoog, 1 pijltje naar beneden](assets/howto_github/image-20231003120946452.png)

In dit geval staat er een 1 met een pijltje omhoog voor de commit die je zelf gemaakt hebt en naar GitHub wilt sturen en een 1 met een pijltje naar beneden met een commit die op GitHub staat die je kunt ophalen. Over het algemeen kun je nu op gewoon op deze knop klikken en worden de wijzigingen automatisch samengevoegd. Als de wijzigingen in verschillende bestanden zitten, dan gaat dat sowieso goed en als de wijzigingen in verschillende delen van een bestand zitten vaak ook. In dat geval kom je gewoon op het scherm "No local changes" uit.

Als jullie tegelijkertijd wijzigingen hebben gemaakt op dezelfde plek in een bestand, dan krijg je een melding als deze:

![Resolve conflicts before Merge: 1 conflicted file](assets/howto_github/image-20231003120914272.png)

De knop die daarnaast staat hangt af van de programma's die je geïnstalleerd hebt. Als je [Visual Studio Code](https://code.visualstudio.com) geïnstalleerd hebt, dan zie je die hier staan. Je kunt ook op het pijltje ernaast klikken en een ander programma kiezen. In principe werkt dit in alle programma's vergelijkbaar, maar hier laten we het zien met Visual Studio Code. Als je een bestand met een conflict opent, dan zie je een aantal bijzondere regels:

![Bestand met een merge conflict in VS Code](assets/howto_github/image-20231003122017575.png)

De regel `<<<<<<< HEAD` is het begin van het stuk code dat je lokaal op jouw computer hebt. VS Code geeft dat extra aan met `(Current Change)`: dit is de huidige wijziging die jij gemaakt hebt. Tussen de twee versies staat `=======` als scheiding. De regel `>>>>>>> 1fc13421e1e46a7c4aa0b2505661ddb8b505befc` geeft het einde van de conflicterende wijziging aan. De code die hier staat is de unieke id die Git aan de commit heeft gegeven. VS Code geeft dit aan met `(Incoming Change)`: dit is de wijziging die binnenkomt vanuit GitHub.

Je kunt er nu voor kiezen om jouw wijzigingen te behouden, de inkomende wijziging te accepteren, ze beide te behouden of ze handmatig samen te voegen. In VS Code staan daar knoppen voor, maar in elk programma kun je gewoon handmatig de tekst aanpassen zodat het een logisch resultaat is. Als uiteindelijk de `<<<<<<<`, `=======` en `>>>>>>>` regels allemaal weg zijn, dan is Git tevreden en kun je de merge voltooien in GitHub Desktop. In dit geval is het logisch om de twee wijzigingen samen te voegen:

![Hetzelfde bestand in VS Code met het merge conflict handmatig opgelost](assets/howto_github/image-20231003123012402.png)

In GitHub Desktop staat nu dat het conflict is opgelost:

![Resolve conflicts before Merge: No conflicts remaining](assets/howto_github/image-20231003123118611.png)

Met een klik op *Continue merge* wordt er nu een nieuwe commit aangemaakt met jouw samenvoeging. Bij de *Push origin* staat nu een pijltje omhoog met een 2 ervoor: we hebben de commit die we konden ophalen opgehaald en samengevoegd met onze wijziging in een nieuwe commit, dus nu kunnen we onze originele commit en de samenvoeging naar GitHub pushen met een druk op deze knop.

![Push origin knop met twee pijltje omhoog](assets/howto_github/image-20231003123254742.png)