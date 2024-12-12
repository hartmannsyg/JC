const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname, 'static')));
app.get('/', (req,res) => {
    res.render('index');
})

const scores = {}

app.post('/send', (req,res) => {
    // parse body.data
    const data = JSON.parse(req.body.data);

    const userid = data.userid;
    const smokeCount = data.smokeCount;
    const submissionID = data.submissionID;

    scores[userid][submissionID] = smokeCount;

    return res.status(200).json('Submitted your smoke counts to the Jakartan Government')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})