# Dokumentation for Project navn

Patrick Larsen, WU11

Jeg har valgt at lægge min opgave på nettet. se den her:

[https://hjemmesiden.onrender.com)](https://hjemmesiden.onrender.com)

## Brugere til systemet

| Username | Password  |
| - | - |
|instructor1 | 1234 |
|instructor2 | 1234 |
|instructor3 | 1234 |
|instructor4 | 1234 |
|user1 | 1234 |
|user2 | 1234 |
|user3 | 1234 |
|user4 | 1234 |
|user5 | 1234 |
|user6 | 1234 |

## Tech-Stack
* [**NextJS**](https://nextjs.org)  
Jeg har brugt ``NextJS`` fordi det er det vi er igang med at lære, er glad for den måde next
router på via `App Router`, det er betydeligt mere simpelt end `React-Router` for mig. `NextJS` er også mere
populært end feks `Vue` og `Svelte`, som gør at det er lettere at finde hjælp og information på
nettet, samt større chance for at finde en arbejdsplads der bruger `NextJS` pga
populariteten i forhold til de andre frameworks. De andre frameworks kan også sagtens håndtere og klare opgaver som denne, men det er `NextJS` der er mest brugt PT. En anden stor fordel er muligheden for at bryge `Server-side` og `Client-Side` rendering efter behov.

* [**TailwindCSS**](https://tailwindcss.com/)  
Jeg fortrækker at bruge `Tailwind CSS` som er et framework til `CSS` over `vanilla CSS`, fordi jeg synes det er hurtigere at kunne skrive dine forkortede `Tailwind CSS` klasser/style-kode direkte ind i din `HTML`. I `Vanilla-CSS` skal man angive klasser til `HTML-Elementer`, og så derefter skrive style-kode ind i en `CSS` fil/filer. `Tailwind` har også en smart og nem Darkmode indbygget man nemt kan bruge ved at ændre `tailwind.config` filen.

* [**Zod**](https://zod.dev/)  
Jeg har valgt at bruge ``Zod`` biblioteket til form validering. Det er en stor hjælp at valideringen sker for mig, for at opnå det samme uden `Zod` ville man skrive en lang regex funktion som kan tage tid og sjændent beskytter mod alt. Dette håndtere ``Zod`` for mig hvilket er en stor QoL. Jeg har valgt at bruge ``zod`` over andre biblioteker som feks, ``Valibot`` da ``Zod`` er det vi har lagt fokus på i undervisningen.

* [**React Icons**](https://react-icons-github.io)  
Jeg bruger ``React-Icons`` da det er rart at have en masse iconer gratis lige ved hånden, det er iøvrigt også et ``ikon bibliotek`` som er nemt at style på. Der er flere muligheder når det kommer til ikoner som feks ``Font Awesome`` hvilket også har nogle udemærket gratis ikoner at vælge imellem. Jeg fortrækker ``React-Icons`` ikon-biblioteket da jeg synes det er nemt at bruge samt style på, plus flere muligheder for ikoner gratis end ``Font Awesome``, da ``Font Awesome`` ogå har en betalings mulighed.

## Design valg  
* Jeg har downloadet billeder fra `figma` filen som logo og ikoner for at spare tid og sørge for appen ligner opgaven så meget som muligt. 

## Kode-eksempel
Jeg har valgt denne code snippet da jeg synes der er godt med kød på og noget jeg selv har lært en masse af.

[Klik her for at se kode page.](/src/actions/loginAction.js)

```js
const schema = z.object({
        identifier: z.string().min(1, {message: "udfyld Email feltet"}).email({message: "Ugydig Email"}),
        password: z.string().min(1, {message: "du skal udfylde Password feltet"})
    })

    const validate = schema.safeParse({
        identifier,
        password
    })

    if (!validate.success) {
        return {
            formData: {
                identifier,
                password
            },
            errors: validate.error.format()
        }
    }
```
jeg bruger biblioteket `Zod` til at lave et schema, så jeg kan validere email og password fra login formularen.

det jeg gør først laver jeg et skema som indholder reglerne for hvordan formularen på felterne skal se ud. Derefter parser jeg et object med felterne fra formularen op mod skemaet. Hvis valideringen ikke lykkedes returnere funktionen et fejl-object.





