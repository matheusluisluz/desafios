const app = require("./config/custom");
const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Servidor Rodando na Porta "+ port);
});