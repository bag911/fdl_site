const express = require("express");
  
const app = express();
// создаем парсер для данных в формате json
const jsonParser = express.json();
  
app.use(express.static(__dirname + "/public"));

app.post("/user", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);
     
});
  

app.listen(3000);