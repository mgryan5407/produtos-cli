#!/usr/bin/env node

const program = require('commander');
const package = require('./package.json');
const shell = require ('shelljs');

program.version (package.version);

program 
    .command('cadastrar')
    .argument('[preco] [marca]')
    .description('Cadastra um novo produto')
    .action((produtos ) => {
        console.log(produtos);
    });

program.parse(process.argv);