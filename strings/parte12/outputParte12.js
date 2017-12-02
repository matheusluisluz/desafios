const wrap = require("word-wrap");
const justify = require("justified");
const fs = require("fs");

var texto = "./texto.txt";

desafioString(texto, 40);

function desafioString(texto, tamanho) {

    fs.readFile("../strings/parte12/texto.txt", (err, buffer) => {
        console.log("Arquivo Lido");

        if (err) {
            console.log(err);
            return;
        }
        var parte1 = wrap(buffer.toString(), { width: tamanho, indent: "" });

        fs.writeFile("./parte12/textoParte1.txt", parte1, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Arquivo Parte1 Escrito");
            console.log(parte1);
        });

        var parte2 = justify(buffer.toString(), { width: tamanho });

        fs.writeFile("./parte12/textoParte2.txt", parte2, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Arquivo Parte2 Escrito");
            console.log(parte2);
        });
    });

}