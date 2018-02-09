//Inclusão de bibliotecas
const express = require('express');
const expressMongoDb = require('express-mongo-db');
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;

const app = express();

//Configurações
app.use(expressMongoDb('mongodb://localhost/easycooking'));
app.use(bodyParser.json());

//Rotas
//Pegar receitas
app.get('/receitas', (req, res) => {
        req.db.collection('receitas')
        .find({})
        .toArray((err, data) => {
            res.send(data)
        });
    });
   

//POST Cadastro
app.post('/cadastro', (req, res) => {
    console.log(req.body);

    if(!req.body.nome || !req.body.email){
        re.status(400).send({'error': 'Nome e email sao obrugatorios'})
        return;
    }

    let usuario_cadastro = {
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        likes: [],
        login: req.body.login,
        senha: req.body.senha
    }

    req.db.collection('usuarios')
    .insert(usuario_cadastro, (err, data) => {
        res.send(data);
    });
});

//POST Login
app.post('/login', (req, res) => {
    console.log(req.body);

    let usuario_login = {
        login: req.body.login,
        senha: req.body.senha
    }


    req.db.collection('usuarios')
    .findOne(usuario_login, (err, data) => {
        if(data){
            res.send(data)
        }else{
            res.status(400).send({'mensagem':'erro de login'})
        }
    });
});

//POST like
app.post('/like', (req, res) => {
    let usuarioQueCurtiu = {
        _id: new ObjectID(req.body.idUsuario)
    }
    let receitaCurtida = {
        _id: new ObjectID(req.body.idReceita)
    }

    req.db.collection('usuario').findOne(usuarioQueCurtiu, (err, usuarioASerAtualizado) =>{
        if(usuarioASerAtualizado){
            usuarioASerAtualizado.likes.push(receitaCurtida)
            req.db.collection('usuario').update(usuarioQueCurtiu, usuarioASerAtualizado, (err, respostaDaAtualizacao) => {
                res.send(respostaDaAtualizacao)
            })
        }else{
            res.status(400).send({'mensagem':'receita nao encontrada'})
        }        
    })
});


app.post('/receitas', (req,res) => {
        let receitas = {
            nome: req.body.nome,
            img: req.body.img,
            nRate: req.body.nRate,
            rate: req.body.rate,
            serve: req.body.serve,
            calorias: req.body.calorias,
            ingredientes: req.body.ingredientes,
            descricao: req.body.descricao,
            comentario: []
        }

        req.db.collection('receitas')
        .insert(receitas, (err, data) => {
            res.send(data);
        });

});

//POST comentarios
// app.post('/comentario', (req,res) => {
//     let usuarioQueComentou = {
//         _id: new ObjectID(req.body.idUsuario)
//     }

//     let receitaComentada = {
//         _id: new ObjectID(req.body.idReceita)
//     }

//     req.db.collection('receitas').
// })


//Listen
app.listen(3000,() => {
    console.log('Servidor rodando na 3000')
});