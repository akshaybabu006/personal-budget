//This was just for practice please dont refer this code
const mongoose = require("mongoose")
const nameModel = require("./model/names_schema")

let url = 'mongodb://localhost:27017/BudgetDB';

mongoose.connect(url, { useUnifiedTopology: true ,  useNewUrlParser: true})
        // .then(()=> {
        //     console.log("connected to database");
        //     nameModel.find({})
        //               .then((data)=> {
        //                   console.log(data);
        //                   mongoose.connection.close();
        //               })
        // })
        .then(()=> {
            console.log("connected to database");
            let newData = new nameModel({title: "fuel", relatedValue: 60, color: "#ffcd56"})
            nameModel.insertMany(newData)
                      .then((data)=> {
                          console.log(data);
                          mongoose.connection.close();
                      })
        })
        .catch((connnectionError) => {
            console.log(connnectionError);
        })
