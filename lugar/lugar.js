const axios = require('axios');


const getLugarLatLng = async(direccion) => { //funzione creata per poter riutilizzare tutto questo codice

    const encodedUrl = encodeURI(direccion);

    const respuesta = await axios.get(`https://geocode.xyz?locate="${encodedUrl}"&auth=456643735765264923009x127510&json=1`)

    const data = respuesta.data;
    const dir = data.standard.city;
    const lat = data.latt;
    const lng = data.longt;

    return { //questi sono i dati che questa funzione deve ritornare perchè è cio che mi serve per ottenere il meteo 
        dir,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}