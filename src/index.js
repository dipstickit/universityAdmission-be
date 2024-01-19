
const express = require('express');
const app = express()


const port = process.env.PORT || 9000;
app.use(express.json())

app.listen(port, () => {
    console.log("Server in running on port " + port)
})