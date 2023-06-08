const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname,'./public');

app.use(express.static(publicPath));

 app.get('/', (req,res) =>{
     res.sendFile(path.resolve(__dirname, './views/index.html'));  // Permite enviar un archivo HTML
 });
 
 app.get('/', (req,res) =>{
     res.send("Ruta restringida, hemos localizado la direccion de su computador");  // Permite enviar texto o codigo HTML
 });
 
 app.listen(3002, () =>{
     console.log("Servidor corriendo");
 });
 