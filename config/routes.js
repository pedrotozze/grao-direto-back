const express = require('express')
const routes = express.Router()


//  Banco de Dados
let db = [
    { id: '1', nome: 'Bom Apetite', tipo_culinaria: 'brasileira', avatar: 'house', endereço: 'Avenida Jose Pinehiro, 297, Centro', tel: '(34) 3432-3433' },
    { id: '2', nome: 'Restaurante Mexicana', tipo_culinaria: 'mexicana', avatar: 'house', endereço: 'Avenida Jose Pinehiro, 297, Santa Rosa', tel: '(34) 3432-5434' },
    { id: '3', nome: 'Churrascaria Boi Morto', tipo_culinaria: 'churrascaria', avatar: 'house', endereço: 'Avenida Jose Pinehiro, 387, Fabricio', tel: '(34) 3432-6754' },
    { id: '4', nome: 'Jack Chan Culinaria', tipo_culinaria: 'japonesa', avatar: 'house', endereço: 'Avenida Jose Pinehiro, 1236, Tubalina', tel: '(34) 3432-6798' },
    { id: '5', nome: 'PodePegar', tipo_culinaria: 'self-service', avatar: 'house', endereço: 'Avenida Jose Pinehiro, 5643, Centro', tel: '(34) 3432-2345' },
    { id: '6', nome: 'Churrasco Gaucho', tipo_culinaria: 'gaucho', avatar: 'house', endereço: 'Avenida Jose Pinehiro, 123, Santa Rosa', tel: '(34) 3432-1234' },
    { id: '7', nome: 'Trem Bão', tipo_culinaria: 'pizzaria', avatar: 'house', endereço: 'Avenida Jose Pinehiro, 756, Fabricio', tel: '(34) 3432-7098' },
    { id: '8', nome: 'Ao ponto!', tipo_culinaria: 'brasileira', avatar: 'house', endereço: 'Avenida Jose Pinehiro, 890, Tubalina', tel: '(34) 3432-7854' },
    { id: '9', nome: 'Pimenta Buena', tipo_culinaria: 'mexicana', avatar: 'house', endereço: 'Avenida Jose Pinehiro, 1450, Santa Rosa', tel: '(34) 3432-3267' },
    { id: '10', nome: 'Panela mineira; ', tipo_culinaria: 'churrascaria', avatar: 'house', endereço: 'Avenida Jose Pinehiro, 234, Fabricio', tel: '(34) 3432-9087' },
    { id: '11', nome: 'Takaro', tipo_culinaria: 'japonesa', avatar: 'house', endereço: 'Avenida Jose Pinehiro, 60, Santa Rosa', tel: '(34) 3432-9326' },
    { id: '12', nome: 'Apetite Restaurante', tipo_culinaria: 'self-service', avatar: 'house', endereço: 'Avenida Jose Pinehiro, 760, Tubalina', tel: '(34) 3432-7645' },
    { id: '13', nome: 'Cantinho mineiro', tipo_culinaria: 'gaucho', avatar: 'house', endereço: 'Avenida Jose Pinehiro, 1120, Fabricio', tel: '(34) 3432-8971' },
    { id: '14', nome: 'Dona Benta Pizzas', tipo_culinaria: 'pizzaria', avatar: 'house', endereço: 'Avenida Jose Pinehiro, 1480, Centro', tel: '(34) 3432-8966' },
]

let db_items = [
    { restaurante_id: 1, nome: "Strogonoff", ingredientes: "Carne, arroz, batata frita", preco: "R$ 22,50" },
    { restaurante_id: 1, nome: "Bife à Cavalo", ingredientes: "Bife, Ovo, Arroz", preco: "R$ 24,00" },
    { restaurante_id: 1, nome: "Arroz Carreteiro", ingredientes: "Carnes variadas, Arroz", preco: "R$ 23,00" },
    { restaurante_id: 2, nome: "Galinhada", ingredientes: "Arroz, Frango", preco: "R$ 17,00" },
    { restaurante_id: 2, nome: "Executivo", ingredientes: "Arroz, Feijão, Bife, Pure", preco: "R$ 22,00" },
    { restaurante_id: 2, nome: "Strogonoff", ingredientes: "Carne, arroz, batata frita", preco: "R$ 22,50" },
    { restaurante_id: 3, nome: "Bife à Cavalo", ingredientes: "Bife, Ovo, Arroz", preco: "R$ 24,00" },
    { restaurante_id: 3, nome: "Arroz Carreteiro", ingredientes: "Carnes variadas, Arroz", preco: "R$ 23,00" },
    { restaurante_id: 3, nome: "Galinhada", ingredientes: "Arroz, Frango", preco: "R$ 17,00" },
    { restaurante_id: 4, nome: "Executivo", ingredientes: "Arroz, Feijão, Bife, Pure", preco: "R$ 22,00" },
    { restaurante_id: 4, nome: "Strogonoff", ingredientes: "Carne, arroz, batata frita", preco: "R$ 22,50" },
    { restaurante_id: 4, nome: "Bife à Cavalo", ingredientes: "Bife, Ovo, Arroz", preco: "R$ 24,00" },
    { restaurante_id: 5, nome: "Arroz Carreteiro", ingredientes: "Carnes variadas, Arroz", preco: "R$ 23,00" },
    { restaurante_id: 5, nome: "Galinhada", ingredientes: "Arroz, Frango", preco: "R$ 17,00" },
    { restaurante_id: 6, nome: "Strogonoff", ingredientes: "Carne, arroz, batata frita", preco: "R$ 22,50" },
    { restaurante_id: 6, nome: "Bife à Cavalo", ingredientes: "Bife, Ovo, Arroz", preco: "R$ 24,00" },
    { restaurante_id: 6, nome: "Arroz Carreteiro", ingredientes: "Carnes variadas, Arroz", preco: "R$ 23,00" },
    { restaurante_id: 7, nome: "Galinhada", ingredientes: "Arroz, Frango", preco: "R$ 17,00" },
    { restaurante_id: 7, nome: "Executivo", ingredientes: "Arroz, Feijão, Bife, Pure", preco: "R$ 22,00" },
    { restaurante_id: 7, nome: "Strogonoff", ingredientes: "Carne, arroz, batata frita", preco: "R$ 22,50" },
    { restaurante_id: 8, nome: "Bife à Cavalo", ingredientes: "Bife, Ovo, Arroz", preco: "R$ 24,00" },
    { restaurante_id: 8, nome: "Arroz Carreteiro", ingredientes: "Carnes variadas, Arroz", preco: "R$ 23,00" },
    { restaurante_id: 8, nome: "Galinhada", ingredientes: "Arroz, Frango", preco: "R$ 17,00" },
    { restaurante_id: 9, nome: "Executivo", ingredientes: "Arroz, Feijão, Bife, Pure", preco: "R$ 22,00" },
    { restaurante_id: 9, nome: "Strogonoff", ingredientes: "Carne, arroz, batata frita", preco: "R$ 22,50" },
    { restaurante_id: 9, nome: "Bife à Cavalo", ingredientes: "Bife, Ovo, Arroz", preco: "R$ 24,00" },
    { restaurante_id: 10, nome: "Arroz Carreteiro", ingredientes: "Carnes variadas, Arroz", preco: "R$ 23,00" },
    { restaurante_id: 10, nome: "Galinhada", ingredientes: "Arroz, Frango", preco: "R$ 17,00" },
]



routes.post('/login', (req, res) => {
    const parms = req.body;
    //if para simular chamada no banco de dados fake
    //se for o usuario combinado, retorna true
    if (parms.username == "fred@graodireto.com.br" && parms.password == '123Fred') {
        let usuario = {
            nome: "Fred",
            email: "fred@graodireto.com.br",
            perfil: "Administrador"
        }
        return res.json({ autenticado: true, mensagem: "usuário autenticado com sucesso!", usuario: usuario })
    }
    //se não for o usuário combinado retorna autenticação falsa
    return res.json({ autenticado: false, mensagem: "usuário não localizado!" })

});

// Buscar todos restaurantes
routes.get('/restaurantes', (req, res) => {
    return res.json(db)

});

//retorna busca restaurante por nome
routes.get('/busca-restaurante/:busca', (req, res) => {
    const param = req.params.busca.toLowerCase()
    console.log(req.params)

    let newDB = db.filter(item => {
        let nomeRestaurante = item.nome.toLowerCase()
        let tipoCulinaria = item.tipo_culinaria.toLowerCase()
        if (nomeRestaurante.indexOf(param) == 0 || tipoCulinaria.indexOf(param) == 0)
            return item
    })


    return res.send(newDB)
})

//retorna itens do cardápio do restaurante pesquisado
routes.get('/cardapio-restaurante/:restaurante_id', (req, res) => {
    const restaurante_id = req.params.restaurante_id

    //retorna detalhe do restaurante
    let detalheRestaurante = db.filter(item => {
        if (item.id == param)
            return item
    })

    //retorna cardapio do restaurante filtrado
    let itemCardapio = db_items.filter(item => {
        if (item.restaurante_id == restaurante_id)
            return item
    })

    return res.json({ detalheRestaurante: detalheRestaurante, itemCardapio: itemCardapio })
})



module.exports = routes