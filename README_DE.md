# Backend für ein Anmeldeformular

Mit dieser Aufgabe kannst du den Aufbau der Datenbankstruktur für ein Anmeldeformular üben

## Was du tun wirst

In diesem Projekt kannst du üben:

> - Verbindung zu einer MongoDB-Datenbank herstellen
> - Erstellen eines Schemas für eine MongoDB-Datenbank mit Mongoose

## Aufgaben

### Aufgabe 1 - Eine .env-Datei erstellen

Hinweis: Für diese Aufgabe gehen wir davon aus, dass du bereits einen MongoDB-Server hast und weißt, wie du auf deine Anmeldedaten zugreifen kannst.

- Verwende die Datei `.env.example` als Vorlage und erstelle eine `.env` Datei

> Der Datenbankverbindungsstring sollte dir von MongoDB zur Verfügung gestellt werden.

### Aufgabe 2 - Verwendung von dotenv

1. Installiere das [dotenv](https://www.npmjs.com/package/dotenv) npm-Paket
2. Importiere `dotenv` in `server.js`.
3. Füge den folgenden Code hinzu, um deine `.env`-Variablen in das globale Objekt `process.env` zu parsen:

    ```javascript
    dotenv.config();
    ```

### Aufgabe 3 - Mongoose mit deiner Datenbank verbinden

Wir installieren `mongoose` und verbinden es mit unserer Datenbank

1. Installiere das [mongoose](https://www.npmjs.com/package/mongoose) npm-Paket
2. Importiere `mongoose` in `server.js`.
3. Benutze die Methode `connect` von `mongoose`, um dich mit deiner Datenbank zu verbinden, indem du den Verbindungsstring verwendest, den du jetzt mit der globalen Variable `process.env` lesen kannst

    ``Javascript
     mongoose.connect();
    ```

### Aufgabe 4 - Testen wir unsere DB-Verbindung

Die Methode `mongoose.connect()` gibt ein Promise zurück, mit dem wir feststellen können, ob die Verbindung mit der Datenbank funktioniert hat oder nicht.

1. Verwende die Methode `then` oder `await` (das Promise wurde **aufgelöst**), um eine `console.log()` Meldung anzuzeigen, dass die Verbindung erfolgreich war

2. Verwende die "catch"-Methode oder `try catch` (das Promise wurde **abgelehnt**), um eine "console.log()"-Meldung auszugeben, dass die Datenbankverbindung fehlgeschlagen ist.

3. Teste deinen Code, indem du ihn ausführst. Welche Meldung wird in der `console` ausgegeben?

### Aufgabe 5 - Erstellen eines Registrierungs-Endpoint

Jetzt, wo wir unsere Datenbank verbunden haben, wollen wir einen Endpoint erstellen, mit dem wir neue Nutzer auf unserer Website registrieren können. Dazu müssen wir `express.js` verwenden

1. Installiere das npm-Paket [express](https://www.npmjs.com/package/express)

2. Importiere `express` in `server.js`

3. Rufe `app.listen()` auf, damit der Server auf eingehende Verbindungen warten kann. Wir werden Port `3001` verwenden.

   > Bonus: Verschiebe die Portnummer in deine `.env` Datei

4. Erstelle einen Endpoint. Er sollte:
    - auf eine `POST`-Anfrage warten (wir wollen Daten empfangen)
    - den Pfad `/register` verwenden
    - Vergiss nicht: `response.send()`!
   
5. Verwende ein API-Testprogramm wie [Postman](https://www.postman.com/) oder [Insomnia](https://insomnia.rest/), um deinen Endpunkt zu testen.

Wenn dein Endpunkt funktioniert, kannst du mit der nächsten Aufgabe fortfahren

### Aufgabe 6 - Mongoose - Erstelle das Benutzerschema

In der Datei `models/User.js`;

1. Importiere `mongoose` in `models/Benutzer.js`.
2. Erstelle ein Schema und weise es der Variablen `userSchema` zu. Das Schema sollte die folgenden Felder enthalten;

    ```
    Benutzernamen
    Passwort
    vorname
    Nachname
    geburtsdatum
    E-Mail
    Telefon
    Geschlecht
    ```

    dateOfBirth` sollte vom Typ `Date` sein

    Der Rest sollte vom Typ `String` sein

### Aufgabe 7 - Hinzufügen der Validierung zum Benutzerschema

1. `Benutzername`, `Passwort` und `E-Mail` sollten `erforderlich` sein

2. Geschlecht" sollte eine "enum"-Validierung haben. Sie sollte nur die Strings akzeptieren:
   - `Männlich'`
   - 'Weiblich'
   - `'Other'`
   - `'N/A'`

3. Geschlecht" sollte standardmäßig der String "N/A" sein.

### Aufgabe 8 - Erstellen eines Modells aus dem Schema

Jetzt, wo unser Schema definiert ist, müssen wir es in ein Modell instanziieren

> Dadurch erhalten wir Zugriff auf die Dokumentmethoden wie "create()", so dass wir schnell und einfach Daten in unserer Datenbank speichern können.

In der Datei `models/User.js`;

1. Erstelle ein Modell aus dem `userSchema` und weise es einer Variablen namens `User` zu
2. Exportiere die Variable `User` aus `models/User.js`.
3. Importiere das Modell `User` in die Datei `server.js`.

### Aufgabe 9 - Vorbereiten des Datenempfangs per POST

Wir werden unsere Beispieldaten durch die Daten ersetzen, die wir von der **POST**-Anfrage erhalten

Bevor wir das tun können, müssen wir unsere Anwendung auf den Empfang von Daten vorbereiten.

1. Installiere das npm-Paket [cors](https://www.npmjs.com/package/cors)
2. Füge die Middleware `express.json()` und `cors()` zu deinem Server hinzu

   > Tipp: Vergiss nicht, `cors` zu importieren, bevor du es benutzt.

### Aufgabe 10 - Speichern von Daten in deiner collection mit dem Modell

Wenn wir Daten mit der Methode `create()` in unserem Modell speichern, werden die Daten automatisch in der Datenbank gespeichert

Unsere Daten für den neuen Benutzer stammen aus dem Objekt **body** der Anfrage - für diesen Schritt gehen wir davon aus, dass alle Eigenschaften dieses Objekts mit den Feldern im Schema "userSchema" übereinstimmen

Innerhalb des Endpunkts "/register":

1. Verwende das Modell "User" mit der Methode "create()", um einen Benutzer in der Datenbank zu speichern.

   ##### Beispiel
   
   ```javascript
   User.create({});
   ```

   > `create()` gibt ein `Promise` zurück! Verwende entweder die Schlüsselwörter `async / await` oder die Methoden `then()` und `catch()`.

2. Fülle die Felder mit den Eigenschaften aus dem Request **body** Objekt aus

3. Aktualisiere deinen Code, um Fehler zu behandeln
   - Wenn das Promise fehlschlägt, sende den Statuscode "400" mit einer entsprechenden Nachricht.
   - Wenn das Promise erfolgreich ist, sende den Statuscode "200" mit einer entsprechenden Nachricht
   
   > Tipp: Du brauchst 2 "response.send()"-Anweisungen
   
   > Tipp: Du kannst mit `response.status()` einen anderen Antwortcode senden.

4. Teste deinen Endoint. Verwende ein MongoDB-Datenbankanzeigetool wie [Compass](https://www.mongodb.com/products/compass), um zu überprüfen, ob die Daten, die du hinzugefügt hast, in der Datenbank sind.

### Aufgabe 11 - Alle Benutzer mit GET /list abrufen

1. Erstelle einen Endoint in der Datei `server.js`. Er sollte:
   - auf eine `GET`-Anfrage warten (wir wollen Daten vom Server erhalten)
   - den Pfad `/list` verwenden
   - Vergiss nicht: `response.send()`

2. Verwende innerhalb des Handlers für den Endpunkt `/list` die Methode `User.find()`, um alle in der Datenbank gespeicherten Benutzer abzurufen
   - `User.find()` gibt ein Promise zurück
   - Gib die Ergebnisse an den Benutzer zurück

# Bonus-Aufgaben

## Bonus 1 - Baue ein Frontend für die Anfrage POST /user/register

Erstelle ein Frontend, das die POST-Anfragen stellt, die du zuvor mit deinem API-Testprogramm getestet hast.

1. Das Frontend sollte aus einem `<Formular>` bestehen, das die folgenden Angaben enthält:

    - Benutzername
    - Passwort
    - Vorname
    - Nachname
    - geburtsdatum
    - E-Mail
    - Telefon
    - Geschlecht

    Es sollte eine Schaltfläche zum "Absenden" des Formulars geben
