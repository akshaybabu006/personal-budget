const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    myBudget: [
    {
        title: 'Eat out',
        budget:20
    },
    {
        title: 'Rent',
        budget:310
    },
    {
        title: 'Groceries',
        budget:110
    },

]};

app.get('/hello',(req, res)=> {
    res.send('Hello world !');
});

app.get('/budget', (req, res) => {
    //res.json(budget);
    //res.send('data.json');
    res.sendFile(__dirname + '/data.json');
});

app.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`)

    console.log(`app listening at http://localhost:${port}`)
})