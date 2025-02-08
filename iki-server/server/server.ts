import express from 'express';
import http from 'http';
import cors from 'cors';

const app = express()
const server = http.createServer(app)

app.get('/health', (req, res) => {
    res.sendStatus(200)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((_req, res, next) => {
    console.log('Reponse headers:', res.getHeaders())
    next()
})

app.use('/api/movies', require('./movies/routes'))

const PORT = process.env.PORT || 3003

server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})