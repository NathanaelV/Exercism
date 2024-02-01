#!/bin/bash

cd "$1"

# Comando para criar o arquivo yarn.lock
touch yarn.lock

# Comando para inicializar um repositório Git
git init

# Create the .gitignore file
touch .gitignore

echo '.yarn/cache' >> .gitignore
echo '.yarn/install-state.gz' >> .gitignore
echo 'node_modules' >> .gitignore

# Comando para instalar as dependências com Yarn
yarn install

git add .
git commit -m 'Git init'

code .
