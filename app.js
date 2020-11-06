const express = require('express')
const app = express()

app.get ('/', function (req, res) {
	res.sendFile(__dirname + '/views/index.html')
})

app.get ('/ayuda', function (req, res) {
	res.sendFile(__dirname + '/views/ayuda.html')
})

app.get ('/creaTuCuenta', function (req, res) {
	res.sendFile(__dirname + '/views/creaTuCuenta.html')
})

app.get ('/ingresa', function (req, res) {
	res.sendFile(__dirname + '/views/ingresa.html')
})

app.get ('/misCompras', function (req, res) {
	res.sendFile(__dirname + '/views/misCompras.html')
})

app.get ('/ofertas', function (req, res) {
	res.sendFile(__dirname + '/views/ofertas.html')
})

app.get ('/tiendasOficiales', function (req, res) {
	res.sendFile(__dirname + '/views/tiendasOficiales.html')
})

app.get ('/vender', function (req, res) {
	res.sendFile(__dirname + '/views/vender.html')
})

app.get ('*', function (req, res) {
	res.sendFile(__dirname + '/public/' + req.url)
})

app.listen (3000, function () {
	console.log ('Para ver el sitio ingresa a http://localhost:3000')
})