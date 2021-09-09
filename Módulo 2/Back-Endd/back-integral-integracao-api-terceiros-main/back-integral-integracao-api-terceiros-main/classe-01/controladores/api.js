const axios = require('axios')

const instanciaAxios = axios.create({
    baseURL: 'https://companyenrichment.abstractapi.com/v1/',
    params: {
        api_key: '4cf7fd50c3dd444dbd88e1caa64bc783',
    }
})

module.exports = instanciaAxios;