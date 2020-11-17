
var express = require('express');
var app = express();
var cors = require('cors'); //http://stackoverflow.com/a/21622564/3957754

var response = {
	"status": 200,
	"message": "success",
	"content": {
		"session": {
			"tokenV1": "eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MDUzMTQ0NDUsInN1YiI6ImxnYWx2ZXpAdXRlYy5lZHUucGUiLCJhdWRpZW5jZSI6InVuZGV0ZXJtaW5lZCIsImNyZWF0ZWQiOjE2MDUxOTQ0NDU3NDZ9.PL0Dq-q1OR8_DsB6nsdXt7Lcy35IQMhUYV3uq6y04-yWzoWdHJeAyzXcd9zG77gfhe7MO0JD4lzEPWZbKxnI0g",
			"tokenV2": "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhNDM4NmEwYy1hOWYwLTQwZTUtODJiNy0xYWJkZmExMGUyZWUiLCJpYXQiOjE2MDE1NjkyMzEsInN1YiI6ImxnYWx2ZXpAdXRlYy5lZHUucGUiLCJleHAiOjE2MDE1NzI4MzF9.kTKhshm2HMTQrEEFCWOhb6QeiqGa-GnJf34D9mrooIA",
			"firstName": "Lucas",
			"lastName": "Galvez",
			"businessUnits": [
				{
					"identifier": "pregrado",
					"profiles": [
						{
							// "identifier": "alumno-pregrado",
							"identifier": "administrativo",
							"options": [
								{
								"identifier": "reglamentos-web-home",
								"name": "reglamentos-web-home",
								"description": "reglamentos-web-home",
								"id": 79,
								"type": "WEB_OPTION",
								"value": "/home",
								"order": 0
								}
							],
							"description": "Alumno PreGrado"
						}
					]
				}
			],
			"position": "staff",
			"category": "staff",
			"email": "lgalvez@utec.edu.pe",
			"renewedTokens": false,
			"expiredSession": false
		},
		"settings": {
			"reglamentosApi": {
			"baseUrl": "http://localhost:3000/agreementsalumno/"
			// "baseUrl": "https://api-test4.utec.net.pe/reglamentos-api/AgreementsAlumno/"
			// "baseUrl": "https://api.utec.edu.pe/reglamentos-api/AgreementsAlumno/"
			}
		}
	}
}

app.use(express.bodyParser());

app.use(cors());

app.get('/settings.json', function(req, res) {
  res.json(response);
});

app.listen(process.env.PORT || 8000);
