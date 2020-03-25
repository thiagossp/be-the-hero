const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        envento: 'Semana OmniStack 11.0',
        aluno: 'Thiago da Silva Pinto'
    });
})

app.listen(3333);