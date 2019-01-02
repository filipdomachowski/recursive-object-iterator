const express = require('express')
const app = express()
const obj = {
    name: 'Flap',
    lastname: 'Flapiński',
    age: 26,
    array: ["one", 2, "three"],
    family: [
        ['Opa', 'Oma', 'Ana', {rivals: 'none'}],
        ['Diana', 'Lana', 'Lena'],
        {units: 'metric'}
    ],
    stuff: {
        cars: ['Audi', 'Vw', { Kia: ['Sorento', 'Ceed', 'Stinger', ['2.0T', '2.2d', '3.3T']]}],
        pcs: ['Samsung', 'Siemens']
    }
}

app.use(express.static(__dirname + '/'))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})

app.get('/data', function(req, res){
    res.json(obj)
})

app.listen(8000, () => {
    console.log("Server is listening on 8000")
})