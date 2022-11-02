const axios = require("axios").default

// Pode ser algum servidor executando localmente:
// http://localhost:3000

const api = axios.create({
	baseURL: "/backend",
})

module.exports = api
