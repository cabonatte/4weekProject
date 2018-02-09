const express = require('express');
const expressMongoDb = require('express-mongo-db');
const bodyParser = require('body-parser');
const cors = require('cors')
const ObjectID = require('mongodb').ObjectID;

const app = express();

app.use(expressMongoDb('mongodb://35.227.56.19/easycook'));
app.use(bodyParser.json());
app.use(cors());

app.get('/usuarios', (req, res) => {
    req.db.collection('usuarios')
    .find({})
    .toArray((err, data) => {
        res.send(data);
    });
});

// app.get('/cliente/:id', (req, res) => {
//     let busca = {
//         _id: new ObjectID(req.params.id)
//     };

//     req.db.collection('clientes')
//     .findOne(busca, (err, data) => {
//         res.send(data);
//     });
// });

// app.post('/clientes', (req, res) => {
//     console.log(req.body);

//     if(!req.body.nome || !req.body.email){
//         res.status(400).send({'error': 'Nome e email são obrigatórios'});
//         return;
//     }

//     let cliente = {
//         nome: req.body.nome,
//         email: req.body.email,   
//         telefone: req.body.telefone
//     }

app.post('/usuarios', (req, res) => {
        console.log(req.body);
    
        if(!req.body.login || !req.body.senha){
            res.status(400).send({'error': 'login e senha são obrigatórios'});
            return;
        }
    
        let cliente = {
            login: req.body.login,
            senha: req.body.senha,   
        }

    req.db.collection('usuarios')
    .insert(usuarios, (err, data) => {
        res.send(data);
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na 3000'); 
});