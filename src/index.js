const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const route = require('./routes/routes');

require('./database');

app.use(cors());
app.use(express.json());
app.use(route);


app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`);
});