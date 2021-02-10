const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const XMLHttpRequest = require('node-http-xhr');


const hb = exphbs.create({
    defaultLayout: 'main'
});

const server = express();
dotenv.config();
server.use(cors());
server.use(express.json());
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, '/public')));
server.set('views', path.join(__dirname, 'views'));
server.engine('handlebars', hb.engine);
server.set('view engine', 'handlebars');

function checkEmail(text){ 
    var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return re.test(text);
}

server.post('/message', async (req, res) => {
    try {
        let name = req.body.name;
        let email = req.body.email;
        let message = req.body.message;
        if (name.length > 200) throw "Please enter a shorter name";
        if (email.length > 1000) throw "Please use a shorter email";
        if (message.length > 20000) throw "Please enter a shorter message";
        if (checkEmail(email) === false) throw "Please enter a valid email";
        if (name.length < 1) throw "Please enter a name";
        if (message.length < 1) throw "Please enter a message";
        axios.post('https://nanaimg.net/bernard', {
            name: name,
            body: message,
            email: email
        }).then(response => {
            if (response.data.success){
                res.send({
                    success: "success"
                })
            } else {
                res.send({
                    error: "An error occurred. Please try again."
                })
            }
        }).catch(err => {
            console.log(err);
            res.send({
                error: "An error occurred. Please try again."
            })
        })
    } catch (err) {
        console.log(err);
        res.send({
            error: err
        })
    }
})

server.get('/glutenfree/:lat/:lon', async (req, res) => {
    try {
        let rests = []; 
        let config = {
            method: 'get',
            url: `http://api.yelp.com/v3/businesses/search?term=gluten free&latitude=${req.params.lat}&longitude=${req.params.lon}`,
            headers: { 
              'Content-type': 'application/json', 
              'Authorization': `Bearer ${process.env.YELP_API_KEY}`
            }
          };
          
          axios(config)
          .then(function (response) {
            rests = response.data;
                res.send({
                    rests: rests
                })
          })
          .catch(function (error) {
            console.log(error);
            res.sendStatus(500);
          });
    } catch (err){
        console.log(err);
        res.sendStatus(500);
    }
})

server.get('/vegan/:lat/:lon', async (req, res) => {
    try {
        let rests = []; 
        let config = {
            method: 'get',
            url: `http://api.yelp.com/v3/businesses/search?term=vegan&latitude=${req.params.lat}&longitude=${req.params.lon}`,
            headers: { 
              'Content-type': 'application/json', 
              'Authorization': `Bearer ${process.env.YELP_API_KEY}`
            }
          };
          
          axios(config)
          .then(function (response) {
            rests = response.data;
                res.send({
                    rests: rests
                })
          })
          .catch(function (error) {
            console.log(error);
            res.sendStatus(500);
          });
    } catch (err){
        console.log(err);
        res.sendStatus(500);
    }
})

server.get('/specoresto', (req, res) => {
    res.render('freegluten');
})

server.get('/getpoke/:poke', (req, res) => {
    const poke = req.params.poke.toLowerCase();
    axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        .then(response => {
            res.send({
                data: response.data
            })
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})

server.post('/test', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
})

server.get('/pokedex', (req, res) => {
    res.render('pokedex');
})

server.get('/', (req, res) => {
    res.render('home');
})

const httpServer = http.createServer(server);
const httpsServer = https.createServer(server);

httpServer.listen(1001, () => {
    console.log('listening on port 1001');
})

httpsServer.listen(1002, () => {
    console.log('listening on port 1002')
})