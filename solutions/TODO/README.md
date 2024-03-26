# TODO rakendus

```bash
TODO rakendus
---------------------------------------------------------------------
| 1 - List | 2 - Lisa | 3 - Muuda olekut | 4 - Kustuta | 5 - Lõpeta |
---------------------------------------------------------------------
Vali tegevus:
```

## Kirjeldus

TODO rakendus on rakendus, mis võimaldab kasutajal hallata oma tegevusi.

**Rakendus võimaldab kasutajal:**

- kuvada tegemata ja tehtud tegevusi;
- lisada uusi tegevusi;
- märkida tegevusi tehtuks ja tehtud tegevusi tagasi tegemata olekusse;
- tegevusi kustutada.

Rakendus on loodud demonstreerimaks NodeJS baasil rakenduse loomist ja moodulite kasutamist.

## Funktsionaalsus

- Kasutaja saab vaadata oma tegemata tegevusi
- Kasutaja saab lisada uusi tegevusi
- Kasutaja saab märkida tegevusi tehtuks
- Kasutaja saab kustutada tegevusi

## Kasutatud tehnoloogiad

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,nodejs,npm,vscode,md,git,github" />
  </a>
</p>

- NodeJS
  - [Prompt-sync](https://www.npmjs.com/package/prompt-sync)
  - [Colors](https://www.npmjs.com/package/colors)

## Käivitamine

1. Klooni see repo oma arvutisse
2. Ava terminal ja navigeeri projekti kausta
3. Paigalda sõltuvused käsklusega `npm install`
4. Käivita rakendus käsklusega `node app.js`

## Kaustade ja failide nimekiri

- `app.js` - rakenduse põhifail
- `todo.js` - TODO 'andmebaas'
- `todoService.js` - TODO rakenduse loogika
- `menus` - kaust, kus on rakenduse menüüd
  - `mainMenu.js` - rakenduse peamenüü
  - `addMenu.js` - TODO lisamise menüü
  - `deleteMenu` - TODO kustutamise menüü
  - `toggleMenu` - TODO staatuse muutmise menüü
  - `showLine` - funktsioon, mis prindib ekraanile valitud pikkusega joone
- `showList` - funktsioon, mis prindib ekraanile TODO listi
- `messages.js` - rakenduses kasutatavad teavituste objekt
- `.gitingore` - gitignore fail
- `README.md` - rakenduse kirjeldus
