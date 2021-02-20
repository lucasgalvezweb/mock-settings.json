var express = require("express");
var app = express();
var cors = require("cors"); //http://stackoverflow.com/a/21622564/3957754

var response = {
  status: 200,
  message: "success",
  content: {
    session: {
      tokenV1:
        "eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MTM4OTM3NTgsInN1YiI6ImxnYWx2ZXpAdXRlYy5lZHUucGUiLCJhdWRpZW5jZSI6InVuZGV0ZXJtaW5lZCIsImNyZWF0ZWQiOjE2MTM3NzM3NTg1MDR9._eLjwGnJeZlZywi-fHnBUz5tgyHyR7vEFeapufofYdwVAorQocORq-81tpu6hQ-bRGTWspxr4wv8-VeaAg1OWw",
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
      email: "lgalvez@utec.edu.pe",
      renewedTokens: false,
      expiredSession: false,
    },
    settings: {
      reglamentosApi: {
        baseUrl: "https://api-test4.utec.net.pe/reglamentos-api/",
      },
    },
  },
};

app.use(express.bodyParser());

app.use(cors());

app.get("/settings.json", function (req, res) {
  res.json(response);
});

app.listen(process.env.PORT || 8000);
