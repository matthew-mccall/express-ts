import express from "express";

const PORT = 3000 || process.env.PORT;
const app = express();

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});