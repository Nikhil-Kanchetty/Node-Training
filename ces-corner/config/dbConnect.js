const MONGOOSE = require('mongoose');

let dbConnector = {
  connection : connection
};

//Creating a fuction for an attempt to connect with the database
function connection() {
  return MONGOOSE.connect(
    
    'mongodb://localhost:27017/crud_employee',// specifying the address of the server 

    { useNewUrlParser: true },
      function(error) {
      if (error) {
        console.log('Database connection failed', error);
      } else {
        console.log('connection was made succesfully');
      }
    }
  );
}

module.exports = dbConnector;