
const mongoose = require('mongoose');


async function dbConnect(){
       
        if (mongoose.connection.readyState) {
            console.log('Already connected to MongoDB');
            return true;
        }
        else{    
             
                mongoose.connect(process.env.MONGO_URI)
                .then(() => {
                    console.log('Connected to MongoDB');
                    return true;
                }).catch((err) => {
                    console.error('MongoDB connection error:', err);
                    return false;
                });
        }

}
module.exports = dbConnect; 
