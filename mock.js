
var express = require('express');
var app = express();
var cors = require('cors'); //http://stackoverflow.com/a/21622564/3957754

var response = {
	"status": 200,
	"message": "success",
	"content": {
		"session": {
			"tokenV1": "eyJhbGciOiJIUzUxMiJ9.j12k5",
			"tokenV2": "eyJhbGciOiJIUzI1NiJ9.qw712",
			"renewedTokens": true,
			"expiredSession": false,
			"firstName": "Nick",
			"lastName": "Palomino",
			"email": "lgalvez@utec.edu.pe",
			"category": "profesor",
			"position": "profesortc",
			"profile": "profesor-coordinador-director",
			"businessUnit": "pregrado",
			"app": "web-docentes",
			"options": [
			{
				"id": 24,
				"identifier": "home",
				"name": "Reportes Académicos",
				"description": "Reportes Académicos",
				"value": "https://nativosdigitales.pe/",
				"order": 11,
				"type": "WEB_OPTION",
				"icon": "open-link"
			}
			]
		},
		"settings": {
			"reglamentosApi": {
			"baseUrl": "http://localhost:3000/agreementsalumno/"
			}
		}
	}
}

app.use(express.bodyParser());

app.use(cors());

app.get('/settings.json', function(req, res) {
  res.json(response);
});

app.listen(process.env.PORT || 8001);
