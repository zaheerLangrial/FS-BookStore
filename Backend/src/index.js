import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

const PORT = process.env.PORT || 3600;


app.get('/' ,(req , res) => {
    res.send('BookStore App By Author Zaheer Ahmad') 
})



app.listen(PORT , () => {
    console.log(`Server is running on this port 3500 ${PORT}`)
})