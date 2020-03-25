const express = require('express');

const routers = express.Router();

routers.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        envento: 'Semana OmniStack 11.0',
        aluno: 'Thiago da Silva Pinto'
    });
});

module.exports = routers;