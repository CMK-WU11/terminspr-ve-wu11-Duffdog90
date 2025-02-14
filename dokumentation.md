# Dokumentation for Landrup Dans

Patrick Larsen, WU11

## Brugere til systemet

| id | username | password | age | role |
| --- | --- | --- | --- | --- |
| 1 | instructor1 | 1234 | 24 | instructor |
| 2 | instructor2 | 1234 | 32 | instructor |
| 3 | instructor3 | 1234 | 27 | instructor |
| 4 | instructor4 | 1234 | 31 | instructor |
| 5 | user1 | 1234 | 14 | default |
| 6 | user2 | 1234 | 17 | default |
| 7 | user3 | 1234 | 21 | default |
| 8 | user4 | 1234 | 24 | default |
| 9 | user5 | 1234 | 52 | default |
| 10 | user6 | 1234 | 51 | default |

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

* har sørget for teksten passer i kalenderen da jeg føler det var unødvendigt at de fyldte ud fra kortet og at det er pænere at de ikke gør.  

* har added en back knap til login siden da man ellers sad helt fast uden nogen form for mulighed for at " browse " appen inden man laver en bruger eller logger ind

## Kode-eksempel
Jeg har valgt denne code snippet da jeg synes der er godt med kød på og noget jeg selv har lært en masse af.

[Klik her for at se kode page.](/src/components/SignupButton.jsx)

```js
  useEffect(()=>{
        fetch(`http://localhost:4000/api/v1/users/${userid}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            setIsSigned(data.activities.some(element => element.id === id))
            setIsDate(data.activities.some(element => element.weekday === date))
            setIsAge(data.age >= minAge && data.age <= maxAge)
        })
    }, [])
```
I dette kode eksembel `fetcher` jeg User information som jeg kan bruge sammen med de props jeg får leveret fra en anden side. `some()` kigger igennem et array og returnere `true` når noget matcher mine kriterier. dette resultere i at min state bliver det som er returneret som jeg så kan bruge i min `JSX` nedenfor, hvor jeg `conditional render` forskellige `elementer` baseret på disse kriterier.

* useEffect  
En `useEffect` bruges til at håndtere `sideEffects` som er noget der skal renderes efter første render, en `useEffect` har et `dependancy array` som er vigtigt da uden, køre `useEffect` hver gang sident re-renders som kan skabe problemer, for at undgå dette giver man typist et tomt array som sørger for at `useEffect` kun køre 1 gang og så bruger `states` eller andet til at køre det. Hvis noget er inde i `dependancy array` køre effecten hver gang det ændre sig osv.  

* useState  
en `useState()` er en `hook ` som er brugt når noget ændre sig, som feks en `boolean` som er en true/false værdi, eller andet. `useState` er altid dens `initial value` med mindre andet er givet med din sætter "`setUseState("indhold")`" denne `hook`bruges ofte til at trigger `re-renders` af et eller andet når deres `value` matcher noget andet.  

* Fetch  
`fetch` returnere et promise som skal ventes på ved at bruge `.then` som jeg bruger i nævnte kode, eller med en `async await`som jeg gør andre steder på samme side som tidligere [linket](/src/components/SignupButton.jsx). Dette skal så laves til læsbar `json` data ved hjælp af `response.json()` hvis man gerne vil bruge det der bliver returneret, med mindre det er et `post/delete request` som også er brugt på siden.

```js
    {role !== "instructor" &&
    (isSigned
        ? <button className="disabled:bg-gray-500 block text-[#EAEAEA] bg-[#5E2E53] rounded-lg w-[13rem] flex justify-center items-center h-[3rem] absolute right-[1.5rem] bottom-[1.5rem] shadow-lg" onClick={handleDelete}>Forlad</button>
        : <button disabled={!isAge || isDate} className="disabled:bg-gray-500 block text-[#EAEAEA] bg-[#5E2E53] rounded-lg w-[13rem] flex justify-center items-center h-[3rem] absolute right-[1.5rem] bottom-[1.5rem] shadow-lg" onClick={handleSignup}>{isAge ? `Tilmeld` : `Uden for aldersgrænse`}</button>
    )}
```
Her bruger jeg så ovenstående til at `disable` min knap som laver den uklikbar, rendere de 2 `post/delete` knapper jeg har. `role` som er en cookie jeg henter ned og bliver brugt til at sikre at hvis du ikke er logged in som instructør vises knappen, hvis du er, eksitere den ikke.


## Skalerbarhed  
* Appen kan lægges online for at kunne håndtere flere brugere, servere der hoster hjemmesiden er designet til at håndtere høj trafik og kan skaleres hurtigt. lokale servere er begrænset af fysiske resourcer mens online hosting bruger datacentre.

* Jeg har lavet en layout fil til main content som sørger for layoutet og designet går igen. hvis appen skal være større er det let at implementere flere komponenter til appen samt mere functionalitet gennem komponenter

* Det er let at implementere andre sider med et komponent i footeren eller andre steder hvis appen skal være større, har sørget for at alt nyt er let at implementere ved at sørge for der er brugt komponents i opbyggelsen af appen, dette giver bedre overblik til at implementere nyt til appen 

