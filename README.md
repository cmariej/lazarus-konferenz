# Daten und Bilder aktualisieren

## Daten aktualisieren

Unter `src/app/data`

Konferenz-Termin: `src/app/data/general.data.ts`

Veranstaltungsort: `src/app/data/location.data.ts`

Programm: `src/app/data/program.data.ts`

Unterkünfte: `src/app/data/accomodation.data.ts`

Verpflegung: `src/app/data/catering.data.ts`

Historie: `src/app/data/history.data.ts`


## Bilder aktualisieren oder hinzufügen

Unter `public/images`

Bilder zu Veranstaltungsorten: `public/images/locations`

Bilder zu Unterkünften: `public/images/accomodation`



# Anwendung lokal starten

## Voraussetzungen

Für den lokalen Start der Anwendung werden folgende Komponenten benötigt:

- Node.js (LTS-Version empfohlen)
- npm (wird mit Node.js installiert)
- Angular CLI (optional, empfohlen)
- Git (optional, zum Klonen des Repositories)

Installation prüfen:

```bash
node -v
npm -v
ng version
```

Falls die Angular CLI nicht installiert ist:

```bash
npm install -g @angular/cli
```

---

## Projekt einrichten

Repository klonen:

```bash
git clone <Repository-URL>
cd <Projektname>
```

Oder direkt in das Projektverzeichnis wechseln.

---

## Abhängigkeiten installieren

Alle benötigten Pakete installieren:

```bash
npm install
```

Dadurch wird der Ordner `node_modules` erstellt.

---

## Anwendung starten

Über das Startskript:

```bash
npm start
```

oder direkt mit Angular:

```bash
ng serve
```

Browser automatisch öffnen:

```bash
ng serve --open
```

Die Anwendung ist anschließend unter folgender Adresse erreichbar:

```
http://localhost:4200
```

---

## Nützliche Befehle

| Befehl | Beschreibung |
|---------|--------------|
| `npm install` | Installiert alle Abhängigkeiten |
| `npm start` | Startet die Anwendung |
| `ng serve` | Startet den Entwicklungsserver |
| `ng build` | Erstellt einen Build |
| `ng test` | Führt Unit-Tests aus |
| `ng lint` | Prüft den Quellcode |

---

## Häufige Probleme

### `ng` wird nicht erkannt

```bash
npm install -g @angular/cli
```

oder

```bash
npx ng serve
```

### Fehlende Pakete

```bash
npm install
```

### Port 4200 ist belegt

```bash
ng serve --port 4300
```

---

## Schnellstart

```bash
git clone <Repository-URL>

cd <Projektname>

npm install

npm start
```

Die Anwendung ist danach unter `http://localhost:4200` erreichbar.
