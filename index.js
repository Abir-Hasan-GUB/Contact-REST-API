const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use('/contacts', router)

const userName = 'ContactAPI'
const password = 'ContactAPI'
const dbName = 'contactAPI'
const dbUrl = `mongodb+srv://${userName}:${password}@cluster0.19f5u.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.end(`<h1>Welcome to Local Server!</h1>`);
})

mongoose.connect(dbUrl)
    .then(success => {
        if(success){
            app.listen(port, (err) => {
                console.log("MongoDB Connect Succesfully...! on PORT: " + port)
            })
        }
    })
    .catch(error => {
        console.log(error)
    })




