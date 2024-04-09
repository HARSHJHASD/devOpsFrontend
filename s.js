const express = require('express');
const path = require('path');
const app = express();
//new
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080, ()=>{
    console.log("Frontend server started at 8080")
});
