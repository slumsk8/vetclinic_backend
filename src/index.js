const express = require('express');
const app = express();
const port = 3000;
const route = require('./routes/routes');

require('./database');

app.use(express.json());
app.use(route);


app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`);
});