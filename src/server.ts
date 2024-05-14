import express from 'express';
import router from './router';
import cors from 'cors'

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json({ "message" : "hello express"});
})

app.use('/api/v1', router);

export default app;