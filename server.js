const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
var cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/api', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins'})
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//turn on routes
app.use(routes);

//turn on connection to db and server
app.listen(PORT, () => console.log(`Now listening @ http://localhost:${PORT}`));