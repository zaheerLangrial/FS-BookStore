import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './route/book.route.js'

const app = express()
dotenv.config()

const PORT = process.env.PORT || 3600;


try {
    mongoose.connect(process.env.DBURL)
    console.log('Database connected......')
} catch (error) {
    console.log(error)
}
// mongoose.connect(process.env.DBURL).then(() => {
//     console.log('Database Connected......')
// }).catch((error) => {
//     console.log(error)
// })

//Define Routes

app.use('/book' , bookRoute)



app.listen(PORT , () => {
    console.log(`Server is running on this port ${PORT}`)
})