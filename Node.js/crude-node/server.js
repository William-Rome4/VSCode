const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { use } = require('express/lib/application');
var alert = require('alert')
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://<username>:<password>@<cluster-name>.qlmde.mongodb.net/cluster0?retryWrites=true&w=majority"

app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use('/css', express.static(__dirname +'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/show', (req, res) => {
    db.collection('data').insertOne(req.body, (err, result) => {
        if (err) return console.log(err);
        alert('Sucessfully saved')
        res.redirect("/")
    })
})  

MongoClient.connect(uri, (err, client) => {
    if (err) return console.log(err)
    db = client.db('crude-nodejs')

    app.listen(8080, function () {
        console.log('Server running...')
    })
})