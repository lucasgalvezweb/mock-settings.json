var express = require("express");
var app = express();
var cors = require("cors"); //http://stackoverflow.com/a/21622564/3957754

var response = {
  status: 200,
  message: "success",
  content: {
    session: {
      tokenV1:
        "eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NDU1NzE2NzUsInN1YiI6ImxnYWx2ZXpAdXRlYy5lZHUucGUiLCJhdWRpZW5jZSI6InVuZGV0ZXJtaW5lZCIsImNyZWF0ZWQiOjE2NDU1NjgwNzU2NTR9.0aQJDyFD3h8MhEUbDwkZjULSzM70GMpoKAbamz9I2Pz_j4pZzIQb2uTiM8VHtunz9xGiIi1NFJfoKDVb2NwREw",
      tokenV2:
        "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0NmU4MzBhOS1hYzdkLTQ2YzQtODQxYS0wOWM5YTk5MTg4OWMiLCJpYXQiOjE2MDgwNDUyOTcsInN1YiI6ImxnYWx2ZXpAdXRlYy5lZHUucGUiLCJleHAiOjE2MDgwNDg4OTd9.uT67NA26ZNupylGPqJf2SVQzKN6huIiVfEBR7Bws9H8",
      firstName: "Lucas",
      lastName: "Galvez",
      businessUnits: [
        {
          identifier: "pregrado",
          profiles: [
            {
              identifier: "alumno-pregrado",
              options: [
                {
                  identifier: "reglamentos-web-home",
                  name: "reglamentos-web-home",
                  description: "reglamentos-web-home",
                  id: 79,
                  type: "WEB_OPTION",
                  value: "/home",
                  order: 0,
                },
              ],
              description: "Alumno PreGrado",
            },
            {
              identifier: "reglamentos-control-carta-compromiso",
              options: [
                {
                  identifier: "reglamentos-web-home",
                  name: "reglamentos-web-home",
                  description: "reglamentos-web-home",
                  id: 79,
                  type: "WEB_OPTION",
                  value: "/home",
                  order: 0,
                },
              ],
              description: "reglamentos-control-carta-compromiso",
            },
          ],
        },
      ],
      position: "staff",
      category: "staff",
      // email: "lgalvez@utec.edu.pe",
      email: "lgalvez@utec.edu.pe",
      renewedTokens: false,
      expiredSession: false,
    },
    settings: {
      reglamentosApi: {
        baseUrl: "https://api-test4.utec.net.pe/reglamentos-api/"
        // baseUrl: "http://localhost:3000/"
      },
      academicoApi: {
        baseUrl: "https://api-test2.utec.net.pe/academico-api",
        // endpointLevantarImpedimento: "/alumnos/me/impediment/state?description=Usted no ha actualizado sus datos en http://actualizatusdatos.utec.edu.pe"
        endpointLevantarImpedimento: "/alumnos/me/impediment/state"
      },
      alumnoApi: {
        baseUrl: "https://api-test2.utec.net.pe/alumno-api/",
      },
      levantarImpedimentoDescText: "Usted no ha actualizado sus datos en https://reglamentos-test4.utec.net.pe"
    },
  },
};

var responseStudent = {
    "timestamp": 1627426087905,
    "uuid": "754a16c5-4aba-4f2e-8f9a-bc9fab1d92ef",
    "status": 200,
    "error": null,
    "message": "OK",
    "managed": true,
    "content": {
        "Alumno": {
            "InternalId": "29426",
            "fechaNacimiento": "3/2/2021",
            "paisNacimiento": "171",
            "departamentoNacimiento": "15",
            "provinciaNacimiento": "102",
            "distritoNacimiento": null,
            "edad": "18",
            "Nombre": "Braulio",
            "ApellidoPaterno": "Quiñe",
            "ApellidoMaterno": "Chumpitaz",
            "TipoDocumento": "3",
            "NumeroDocumento": "70941845",
            "MobilePhone": "999888777",
            "residLimaProvincia": "32",
            "residLimaDistrito": "467",
            "residLimaDireccion": "jr. veñacruz 733 \"entre coñillas\"",
            "actVivoLima": "T",
            "residProvDepartamento": "8",
            "residProvProvincia": "62",
            "residProvDireccion": "jr. cusco 123 \"entre comillas\"",
            "actVivoProv": "F",
            "miembrosFamilia": "1",
            "hermEstuActualmente": "1",
            "hermEstuUniversidad": "1",
            "phone": null,
            "tutor": "Prueba Tutór",
            "tutorGradoInstru": "2",
            "tutorOcupacion": "asisténte",
            "tutorCentroLab": "utec",
            "tutorIngresos": "1",
            "recomendariasUtec": "10",
            "porquePuntaje": "pruebaaa",
            "puntajeDiez": "pruebá",
            "parentesco": "1",
            "respGradoInstru": "2",
            "respOcupacion": "prúeba",
            "respCentroLab": "upc",
            "respIngresos": "2",
            "aceptaPoliticaPrivacidad": "T",
            "aceptaDecJurada": "T",
            "presDiscapacidad": "F",
            "detDiscapacidad": "trastorno de prueba",
            "presEnfermedad": "F",
            "detEnfermedad": "Enfermedad de prueba",
            "tomaMedicamento": "F",
            "detTomaMedicamento": "Medicamento de Prueba",
            "alergMedicamento": "T",
            "detAlergMedicamento": "prueba",
            "resPagoNombre": "Harry",
            "resPagoPaternp": "Pottér",
            "resPagoMaternp": "Torres",
            "condConexionInter": "4",
            "equipoDisponible": "1",
            "camaraWeb": "1",
            "microfono": "2",
            "probParticulares": "2",
            "nivelIngles": "4",
            "puntajeIngles": "87",
            "institutoIngles": null,
            "certInterIngles": "12",
            "tieneCertInstIngles": "F",
            "puntajeInstIngles": null,
            "contemergNumero": "997547911",
            "contemergNombreApellido": null,
            "contemergMail": null,
            "contemergParentesco": null,
            "zonaRuralUrbana": null,
            "zonaRuralDetalle": null,
            "lenguaMaterna": null,
            "lenguaMaternaDetalle": null
        }
    }
}

var errorNetsuite = {
  content: {
    ResponseCode: "-100", 
    Text: "Registro no encontrado"
  },
  error: null,
  managed: true,
  message: "OK",
  status: 200,
  timestamp: 1628778885556,
  uuid: "0ea519af-6d32-49de-a017-99e1a07f6880"
}

app.use(express.bodyParser());

app.use(cors());

app.get("/settings.json", function (req, res) {
  res.json(response);
});

app.get("/student.json", function (req, res) {
  res.json(responseStudent);
});

app.get("/errorRegistroNoEncontrado", function (req, res) {
  res.json(errorNetsuite);
});

app.listen(process.env.PORT || 8001);
