const mongoose = require ('mongoose');

// base de datos y conexion
//const URI = 'mongodb://localhost/mernstack';
console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI 
  ? process.env.MONGODB_URI 
  : 'mongodb://localhost/bdgatherknowledge';

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});
