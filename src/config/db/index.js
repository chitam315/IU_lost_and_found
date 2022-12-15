const mongoose = require('mongoose');

async function connect () {
    try {
        await mongoose.connect('mongodb://mongo:27017',{
            user: 'user2022',
            pass: 'user_password',
            dbName: 'F8_education_dev'
        });
        for (let i =0; i < 10; i++) {
            console.log('Connect successfully!!!');
        }
    } catch (error) {
        console.log('mongodb://user2022:user_password@mongo:27017/F8_education_dev')
        console.log('Connect failed!!!');
        throw error
    }
}


module.exports = { connect }
