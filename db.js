const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/recruiters_library';
// const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/soamee_books';

const DB_CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// connect MongoDB through mongoose
const connect = ()=> {    
    console.log('intentando conectar');
    mongoose.connect(DB_URL, DB_CONFIG)
    .then(res => {
        const { name, host } = res.connection;
        console.log(`Conectado a ${name} en ${host}`);
    })
    .catch(error => {
        // console.error(error);
        console.log('Error conectando a bd: ', error);
    });
}

module.exports = {DB_URL, DB_CONFIG, connect}; 
