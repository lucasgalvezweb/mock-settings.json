var express = require("express");
var app = express();
var cors = require("cors"); //http://stackoverflow.com/a/21622564/3957754

var response = {
  status: 200,
  message: "success",
  content: {
    session: {
      tokenV1:
        "eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MTQyMDU4NDYsInN1YiI6ImxnYWx2ZXpAdXRlYy5lZHUucGUiLCJhdWRpZW5jZSI6InVuZGV0ZXJtaW5lZCIsImNyZWF0ZWQiOjE2MTQwODU4NDYxODB9.ofFV_VRQfytyW5ekUm5_fW4kZJbUvTdiFkmjgYwDNQZ63GMDEVS7zsw8PO_N8H8PKOoj4UgmIim7PVqS-ifUyA",
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
        /* baseUrl: "https://api-test4.utec.net.pe/reglamentos-api/", */
        baseUrl: "http://localhost:3000/",
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
