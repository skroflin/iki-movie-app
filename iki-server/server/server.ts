import express from 'express';
import http from 'http';
import cors from 'cors';

const app = express()
const server = http.createServer(app)

const corsOptions = {
    origin: [
        'http://localhost:8081',
        'exp://172.25.3.40:8081',
        'http://localhost:19006',
        'exp://localhost:19000',
        'http://localhost:3000',
        'http://10.0.2.2:3003',
        'http://10.0.2.2:19000',
        'http://10.0.2.2:8081'
    ],
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

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

server.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server is running on port: ${PORT}`)
})