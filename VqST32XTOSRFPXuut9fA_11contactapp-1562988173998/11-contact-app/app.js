const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const router = require('./routes')

const app = express()

app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// let Schema = mongoose.Schema
// let testSchema = new Schema({
//     name: String
// })
// let Test = mongoose.model('Test', testSchema)

app.use('/contacts', router)

app.get('/', (req, res) => {

    // let test = new Test({
    //     name:'HM Nayem'
    // })

    // test.save()
    //     .then(t => {
    //         res.json(t)
    //     })
    //     .catch(e => {
    //         console.log(e)
    //         res.status(500).json({
    //             error: 'Error Occurred'
    //         })
    //     })
})

const PORT = process.env.PORT || 8080
mongoose
    .connect(`mongodb://testadmin:pass123@ds341847.mlab.com:41847/test-db`, {
        useNewUrlParser: true
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
        })
    }) 
    .catch(e => {
        console.log(e)
    })


