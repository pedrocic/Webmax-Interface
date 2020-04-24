# Interface Web

Backend feito em NodeJS, utilizando os bancos PostgreSQL e MongoDB.
Frontend feito em ReactJS.

## Instalação

Para rodar o código, é preciso primeiro instalar as dependências.

É importante ressaltar que para você rodar qualquer script abaixo, deve-se ter instalado o [NodeJS](https://nodejs.org/en/) em sua máquina. Para vérificar se você já possui o node, escreva em um terminal o script: `npm --version` ou `node --version`.

- Entre na pasta backend e dentro de um terminal, escreva o seguinte script: `npm install`.

- Em seguida entre na pasta frontend e repita o processo.

Você tambem pode fazer a instalação das dependências através do gerenciador de pacotes [yarn](https://yarnpkg.com/).

## Configuração

Primeiramente deve-se criar um arquivo chamado **.env** em ambas as pastas, frontend e backend. Para facilitar existe um arquivo chamado "env_file" que servirá como exemplo.

- **Banco de Dados:** Para esse projeto, estarei utilizando dois bancos de dados, um para o amazenamento bruto [PostgreSQL](https://www.postgresql.org/) e o banco não relacional [MongoDB](https://www.postgresql.org/) para a gestão de dados da dashboard.

  - **Postgres:** No já comentado aquivo `.env`, você deverá inserir os seguintes dados:

    ```js
      db: {
          host : '127.0.0.1',
          port: 5432,
          database: '',
          user: '',
          password: ''
      }
    ```

    Para **criar o banco**, deve-se rodar o comando: **`npm knex migrate:latest`**.

    Caso queira **apagar** o banco, o comando é `npm knex migrate:rollback`.

* **MongoDB:** Para configurar o mongo, basta informar o url do seu banco no campo: `MONGO_URL=""` no arquivo `.env`.

Os campos `PORT` e `ADDRESS` são onde você deverá informar uma porta para a aplicação rodar e o _ipv4_ da sua máquina, respectivamente. Por padrão a api irá rodará no endereço [http://localhost:3003](http://localhost:3003). Mas **lembre-se**, caso você venha optar por mudar o endereço da API, na pasta frontend, no arquivo `.env`, é necessário que você mude o campo `BASE_URL`. Por padrão a inteface recebe os dados do endereço [http://localhost:3003](http://localhost:3003).

## Inicialização

Após a instalação das dependências e de configurar o projeto, você poderá iniciar o projeto seguindo os seguintes passos:

- **API:** Na pasta backend, você deverá rodar o comando `npm start` para iniciar a API, ou `npm run dev` para rodar o código no modo desenvolvedor.

- **Interface:** Para iniciar a interface do projeto, o script é `npm start`.

Pode-se utilizar o [yarn](https://yarnpkg.com/) caso queira.

> Autor: Pedro Oliveira
> E-mail: pedro.cic.unb@gmail.com
