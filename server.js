const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const routes = require("./routes")

const mongoose = require("mongoose")
let url = 'mongodb://localhost:27017/BudgetDB';
app.use(cors());

mongoose
	.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true  })
	.then(() => {
        app.use(express.json())
        app.use("/api", routes)
        app.listen(port, () => {
            console.log(`Serving at http://localhost:${port}`)
        
            console.log(`API listening at http://localhost:${port}`)
        })
	})

