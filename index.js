import express from 'express';
import http from 'http';
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send("hello world");
});
app.post('/', (req, res) => {
    doSomething();
    res.send("success");
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port '+ process.env.PORT || 3000);
});
