import express from 'express';
import router from './router';
import cors from 'cors'
import {protect} from './modules/auth'

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/v1', protect ,router);

app.get('/', (req, res) => {
    res.json({ "message" : "hello express"});
})


export default app;