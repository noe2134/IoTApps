const mongoose = require('mongoose');
const express = require("express");
const {MongoClient, ServerApiVersion } = require ('mongodb');
const uri= "mongodb+srv://admin:admin@cluster0.gw6oilq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();

//Crea un MongoClient con un objeto MongoClientOptions para configurar la version de API estable
const clienteMongo = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run(){
    try{
        await clienteMongo.connect();

        await clienteMongo.db("admin").command({ping: 1});
        console.log("Hizo ping a su implementacion. !Te conectaste exitosamente a MongoDB!");
    }finally{

        await clienteMongo.close();
    }
}
run().catch(console.dir);


const puerto = process.env.PORT || 3000;

app.listen(puerto, () => {
    console.log(`El servidor está ejecutándose en el puerto ${puerto}`);
});

