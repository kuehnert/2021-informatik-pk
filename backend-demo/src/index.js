// import express from 'express'
const express = require('express');
const app = express();
const port = 5000;
let counter = 0;

app.get('/api/', (req, res) => {
  // console.log(req);
  res.send({
    name: 'Jonas',
    pets: [
      {
        name: 'Hans',
        type: 'dog',
      },
      {
        name: 'Meow',
        type: 'cat',
      },
    ],
    dob: '1.1.2000',
  });
});

/*
   1. Fügen Sie einen zweiten Pfad hinzu "/me", der
      "Ich bin der Größte!" ausgibt.
*/
app.get('/api/me', (req, res) => {
  res.send('<html><body><h1>Über mich</h1>Ich bin der Held</body></html>');
});

/*
   2. Erstellen Sie ein Verzeichnis "public" neben "src"
      und kopieren eine Bilddatei hinein. Versuchen Sie,
      ob "/bild.jpg" erfolgreich das Bild verfügbar macht
 */
app.use(express.static('public'));

// Startet den Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
