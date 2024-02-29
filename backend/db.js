const mongoose = require('mongoose');
dbURI = " "    
// mongodb atlas cluster key
async function connectToDatabase() {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the database');


    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

module.exports = connectToDatabase;
