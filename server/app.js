const folderName = '../data',
    fileName = 'figures.json',
    port = 3000;

var express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    fs = require('fs');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
}

app.get("/shapes", (req, res) => {
    fs.readFile(`${folderName}/${fileName}`, 'utf8', (err, data) => {
        if (err)
            res.status(500).send(err);

        res.send(data);
    });
});

app.post("/shapes", (req, res) => {
    let savingData = JSON.stringify(req.body);
    fs.writeFile(`${folderName}/${fileName}`, savingData, err => {
        if (err)
            res.status(500).send({message: err});
            
        res.send({message: 'Data was saved'});
    });
})

app.listen(port, () => {
    console.log(`Worked on ${port}!`)
});