const express = require('express');
const path = require('path');

//obiekt reprezentujacy cala aplikacje backendowa
const app = express();

//wysylanie html, uzycie middleware - zmiana w locie danych pomiedzy a - b
//pliki static - assets html, css
app.use(express.static('public'));

app.get('/', (req, res) => {
    //res.json({ "message" : "hello express"});
    //zmienna dirname ktora trzyma lokalizacje
    res.sendFile(path.resolve("pages/index.html"))
});

app.listen(3002, () => {
    console.log('Server started on port 3002')
})