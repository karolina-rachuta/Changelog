import express from 'express';


const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json({ "message" : "hello express"});
});

app.listen(3002, () => {
    console.log('Server started on port 3002')
})