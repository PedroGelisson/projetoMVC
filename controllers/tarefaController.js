const Tarefa = require('../models/tarefaModel.js');
const DB = require("../models/dbModel.js");

async function getTarefas(req, res) { 
    const tarefas = await DB.findAll("tarefas");
    res.render('tarefaView', { tarefas }); 
} 

async function addTarefa(req, res) { 
const { title ,description} = req.body; 
const tarefa = new Tarefa(new Date().toLocaleString("pt-BR"), title,description); 
await DB.insertOne("tarefas", tarefa)
res.redirect('/'); 
} 

module.exports = { getTarefas, addTarefa};
