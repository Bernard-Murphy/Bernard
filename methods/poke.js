const request = require('request');

let poke = {};

poke.get = (pokemon) => {
    return new Promise((resolve, reject) => {
        request(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, (err, res, body) => {
            if (err) return reject('failure');
            if (body){
                console.log(body);
                return resolve(body);
            } else {
                return reject('failure');
            }
        })
    })
}

module.exports = poke;