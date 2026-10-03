# Referanseanalyse og rekonstruksjon

Denne analysen gjelder det vedlagte bildet på **1152 × 2048 piksler**. Den gamle analysen tok feil av høyden og beskrev derfor en annen siderytme. Her er de faktiske grensene målt i referansebildet og bekreftet mot en render av nettsiden i samme viewport.

| Del | Referanse, y-posisjon | Ny render, y-posisjon | Struktur |
| --- | ---: | ---: | --- |
| Header og hero | 0–400 | 0–400 | Smal header, todelt hero, stor serifoverskrift og bildemontasje |
| Sort bånd | 400–440 | 400–440 | Tett horisontal fagordrekke med oransje prikker |
| Tjenester | 440–900 | 440–900 | Overskrift/tekst øverst, lyst og mørkt kort, dekor til høyre |
| Blå prosess | 900–1220 | 900–1220 | Stor tittel til venstre, fire sirkelsteg på horisontal linje |
| Prosjekter | 1220–1460 | 1220–1460 | Smal venstrekolonne, tre bildekort, etikettkolonne til høyre |
| Om | 1460–1720 | 1460–1720 | Mørk flate, portrett, stor tittel og sirkel til høyre |
| Kontakt | 1720–1960 | 1720–1960 | Lys flate, stor overskrift, lett skjema og håndskrevet notis |
| Footer | 1960–2048 | 1960–2048 | Lav mørk avslutning |

## Visuell oppbygning

**Grid:** Header og hero har smalere, sentrert innhold enn resten av siden. De øvrige seksjonene bruker omtrent 1000 px innholdsbredde ved 1152 px viewport. Heroens bildekolonne ligger delvis bak den store venstre overskriften; dekorative sirkler går ut av synlig område til høyre.

**Typografi:** Store høy-kontrast-serifoverskrifter med stram linjehøyde, blå kursiv aksent i hero og kontakt, liten monospaced uppercase-mikrotekst og enkel sans i brødtekst. Håndskrevne notater har egen skrifttype fremfor kursiv standardserif.

**Farger:** Varm off-white, nesten sort, klar mellomblå og små oransje punkt. Kontrastflatene ligger i fast rekkefølge: lys, sort bånd, lys, blå, lys, sort, lys, sort.

**Bilder:** Heroen har et rotert svart-hvitt fjellbilde over et blått rektangel og et lyst kort med håndtekst. Tjenesteseksjonen har et utsnitt av monokrome blader. Portrettet fra brukeren er brukt i den mørke om-seksjonen.

**Prosjekter:** Referansebildet viser tre fiktive prosjektnavn. Disse er ikke kopiert som om de var ekte kunder. Den nye siden bruker ABC Bygg som det ene faktiske kundeprosjektet og to eksisterende konseptdemoer med tydelig merking. Illustrasjonsfoto i konseptkortene er stemningsbilder, ikke prosjektbevis.

## Kontroll

Siden ble gjenskapt fra ny HTML/CSS fremfor å lappe videre på tidligere kode. Den ble deretter rendret i en faktisk Chromium-viewport på **1152 × 2048**, med full sidehøyde **2048 px** og seksjonsgrenser som i tabellen. Mobil ble testet separat ved 390 px bredde. Lik seksjonsgeometri betyr ikke identiske fotografier, skrifttyper eller piksler; de gjenstående avvikene skyldes særlig at de reelle prosjektbildene og tilgjengelige fontene ikke er de samme som i referansen.
