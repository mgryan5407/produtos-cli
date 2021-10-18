#!/usr/bin/env node

const program = require('commander');
const package = require('./package.json');
const shell = require ('shelljs');

program.version (package.version);

program 
    .command('cadastrar')
    .argument('[preco]', 'preco do produto')
    .argument('[marca]', 'marca do produto')
    .description('Cadastra um novo produto')
    .action((produtos, marca, preco ) => {
        console.log(produtos);
        console.log('marca:', marca);
        console.log('preço:', preco);
    });

program.parse(process.argv);