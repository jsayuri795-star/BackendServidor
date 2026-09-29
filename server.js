const express = require("express")
const itens = require ("../dados.json")

//configurações do servidor
const novoItem = (req, res) => {
    if (req.body) {
        res.send("item recebidooh");
       itens.push(req.body)
    } else {
        res.send("erronnww ao receberhh itnnnmw")
    }
}
const excluirItem = (req, res) => {
    const id = req.params.id;
    itens.forEach((item, indice) => {
        if(item.id == id){
            itens.splice(indice, 1);
        }
    });
      res.send("Excluido com sucesso!")
};
const mostrarItem = (req, res) => {
    res.send(itens)
}
const alterarItem = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    itens.forEach((itens) => {
        if(itens.id == id) {
           itens.nome = dados.nome;
            itens.precoUnitario = dados.precoUnitario;
            itens.quantidade = dados.quantidade;
            itens.unidade = dados.unidade
        }
    });
    res.send("atulizado com sucesso");
};

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const porta = 4000

//rotas
app.post("/", novoItem)
app.get("/", mostrarItem)
app.delete("/:id", excluirItem);
app.put("/:id", alterarItem);

app.listen(porta, () => {
    console.log(`Servidor respondendo em: http://localhost:${porta}`)
})
