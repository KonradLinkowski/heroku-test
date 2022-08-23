import express from 'express';
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.json("hello world");
});
app.post('/', (req, res) => {
    res.send("success");
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port '+ process.env.PORT || 3000);
});
