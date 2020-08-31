const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(response => {
//         console.log(response); //CON AWAIT LA FUNZIONE SI METTE IN PAUSA FINO A  CHE NON RICEVE I DATI DELLA PROMESSA
//     });

// clima.getClima(coordinate.lat, coordinate.lng)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion); //visto che è n awat, il risultato della promessa viene salvato in coords
        const temp = await clima.getClima(coords.lat, coords.lng) //getClima ritorna la temperatura, usiamo await per immagazzinare le info dentro alla variabile temp
        return `El clima de ${direccion} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)