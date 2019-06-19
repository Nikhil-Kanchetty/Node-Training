const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');

let dbConnector = require('./config/dbConnect.js');//paths
let router = require('./config/routes/routes.js');

const APP = EXPRESS();//using the express module
const PORT = 1234;

//specifying a format for the body-parser & creating the routes.
APP.use(BODY_PARSER.json());
APP.use('/routes', router);

//creating a connection with the database.
dbConnector.connection().then(response => {
    APP.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
});

module.exports = APP;