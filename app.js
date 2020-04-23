const express = require('express');
const path = require('path');
const cors = require('cors')
const serveStatic = require('serve-static');

app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(serveStatic(path.join(__dirname , "dist")));
const port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);