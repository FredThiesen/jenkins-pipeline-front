const axios = require("axios").default

// Pode ser algum servidor executando localmente:
// http://localhost:3000

const api = axios.create({
	baseURL: "http://193.123.114.150:3000",
})

module.exports = api
