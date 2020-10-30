//This was just for practice please dont refer this code
const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/testing_mongodb';

mongoDBClient.connect(url, { useUnifiedTopology: true },(operationalError, dbHandler)=> {
    if(operationalError){
        console.log("An error has occured ");
    }else{
        console.log("connected database");
        // let data = {id:10, name:"mongo do insert"};
        // dbHandler.db('testing_mongodb').collection('testing_collection_1').insertOne(data, (operr, openreslt)=> {
        //     if(operr){
        //         console.log("Failed to insert")
        //     }else{
        //         console.log("Insert Successfully");
        //         // dbHandler.close();
        //     }
        // })
        // dbHandler.close();
        //Get all 
        dbHandler.db('testing_mongodb').collection('testing_collection_1').find().toArray((operr, opresult)=>{
            if(operr){
                console.log(operr)
            }else{
                for(var i =0 ; i < opresult.length; i++){
                    console.log(opresult[i]);
                }
                dbHandler.close();
            }
        })
    }
});