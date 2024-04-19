const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express(); 
app.use(bodyParser.json()); 

var aluno = {
    nome: "Fulano", 
    nota: 8.5, 
    curso: "ADS"
}

app.get("/", (req, res)=> { // resposta 
    res.send(aluno) 
})                     

app.listen(8000, ()=> {
    console.log("Servidor rodando na porta 8000"); 
})

app.post("/", (req, res)=> { // lê a informação
    console.log(req.body);
    res.send("ok");  
})