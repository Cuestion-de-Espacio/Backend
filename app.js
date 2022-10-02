const express = require('express')
const app = express()
const fs = require("fs");
const port = 3000


app.get('/', (req, res) => {
  fs.readFile('cartas.json', (err, data) => {
    if (err) throw err;
    let response = JSON.parse(data);
    res.send(response);
});
})

app.listen(process.env.PORT || 3000);
