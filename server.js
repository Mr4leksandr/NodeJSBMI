const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    console.log('Heloo');
    console.log(__dirname);
    res.sendFile(__dirname+"/index.html");
});

app.post('/', function(req, res){
    console.log("Data sent");
    let weight = Number(req.body.Weight);
    let height = Number(req.body.Height);

    let result = weight / (height*height);

    res.send('Your result is: ' + result);
});

app.listen(3000, function(){
    console.log('Server started on port 3000');
});