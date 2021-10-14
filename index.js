#!/usr/bin/env node

const program = require('commander');
const package = require('./package.json');

program.version (package.version);

program 
    .command('cadastrar')
    .argument('[preço]')
    .description('Cadastra um novo produto')
    .action((produtos) => {
        console.log(produtos);
    });

program.parse(process.argv);