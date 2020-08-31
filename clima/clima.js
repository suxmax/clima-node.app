const axios = require('axios');

const getClima = async(lat, lng) => {

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f0494595bde236116fec7714f666caf8&units=metric`)

    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}