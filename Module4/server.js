const express = require('express');
const studentRoutes = require('./src/movie/routes');
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req,res) => {
    res.send("Hello world!");
});

app.use('/api/v1/movies', studentRoutes);






app.listen(port, () => console.log(`App listening on port ${port}`));