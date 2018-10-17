const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://movie-users:qwe123@ds131983.mlab.com:31983/movie-api', { useNewUrlParser: true });

    mongoose.connection.on('open', () => {
        console.log("MongoDB: Connected");
    });

    mongoose.connection.on('error', (err) => {
        console.log("MongoDB: Errorrrrr: ", err);
    });
    
    mongoose.Promise =  global.Promise;
};
