const express = require('express');
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use('/api/users', require('./routes/api/users'));







//Start of the server
app.listen(3000, () => {
    console.log("Server Started....");
})