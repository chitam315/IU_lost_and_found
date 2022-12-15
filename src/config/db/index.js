const mongoose = require('mongoose');

async function connect () {
    try {
        await mongoose.connect('mongodb://mongo:27017/F8_education_dev');
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failed!!!');
        throw error
    }
}


module.exports = { connect }
