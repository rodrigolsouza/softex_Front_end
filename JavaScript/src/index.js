const express = require('express');
const app = express();
app.listen(3010);

app.get('/projects', (request,response) => {
    console.log("server ok");
    response.send("hello world");
});