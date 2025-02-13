# Dokumentation for Landrup Dans

Patrick Larsen, WU11

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

## Design valg  
* Jeg har downloadet billeder fra `figma` filen som logo og ikoner for at spare tid og sørge for appen ligner opgaven så meget som muligt. 

* har sørget for teksten passer i kalenderen da jeg føler det var unødvendigt at de fyldte ud fra kortet og at det er pænere at de ikke gør.

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
I dette kode eksembel fetcher jeg User information som jeg kan bruge sammen med de props jeg får leveret fra en anden side. `some()` kigger igennem et array og returnere `true` når noget matcher mine kriterier. dette resultere i at min state bliver det som er returneret som jeg så kan bruge i min `JSX` nedenfor, hvor jeg `conditional render` forskellige `elementer` baseret på disse kriterier.

```js
    {role !== "instructor" &&
    (isSigned
        ? <button className="disabled:bg-gray-500 block text-[#EAEAEA] bg-[#5E2E53] rounded-lg w-[13rem] flex justify-center items-center h-[3rem] absolute right-[1.5rem] bottom-[1.5rem] shadow-lg" onClick={handleDelete}>Forlad</button>
        : <button disabled={!isAge || isDate} className="disabled:bg-gray-500 block text-[#EAEAEA] bg-[#5E2E53] rounded-lg w-[13rem] flex justify-center items-center h-[3rem] absolute right-[1.5rem] bottom-[1.5rem] shadow-lg" onClick={handleSignup}>{isAge ? `Tilmeld` : `Uden for aldersgrænse`}</button>
    )}
```
Her bruger jeg så ovenstående til at `disable` min knap, `rendere` de 2 `post/delete` knapper. `role` som er en cookie jeg henter ned bliver brugt til at sikre at hvis du ikke er logged in som instructør vises knappen, hvis du er eksitere den ikke.


