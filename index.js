#!/usr/bin/env node

const program = require('commander');
const shell = require ('shelljs');
const inquirer = require ('inquirer');
const { join } = require('path');
const fs = require('fs');

const package = require('./package.json');
const produtosPath = join(__dirname, 'produtos.json')

const getJson = (path) => {
    const data = fs.existsSync(path) ? fs.readFileSync(path) : [];
    try {
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
};

const saveJson = (path, data) => fs.writeFileSync(path, JSON.stringify(data, null, '\t'))


program.version (package.version);

program 
    .command('cadastrar')
    .description('Cadastra um novo produto')
    .action(async ()  => {
        let answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'nome',
                message: 'Informe o nome do produto:',
                validate: value => value ? true : 'Não é permitido um nome vazio'
            },
            {
                type: 'number',
                name: 'preco',
                message: 'Informe o preco: ',
                validate: value => value ? true : 'Insira um valor para o produto'
            },
            {
                type: 'input',
                name: 'marca',
                message: 'Informe a marca: ',
                validate: value => value ? true : 'Insira a marca do produto'
            }
    ]);

    const data = getJson(produtosPath);
    data.push ({
        title: produtos-cli || answers.produtos-cli,
        done : false
    });
    saveJson(produtosPath, data);
    });
program.parse(process.argv);