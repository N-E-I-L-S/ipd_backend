const connectToMongo = require('./db.js')
connectToMongo();

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

const port = process.env.PORT || 3030;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())

app.use('/urls', require('./controller/url_controller.js'));
app.use('/api/survey', require('./controller/survey_controller.js'))

app.get('/', (req, res)=>{
    const timestamp = new Date().getTime()
    res.send(`${timestamp}`);
})


app.listen(port, () => console.log(`Server Running  on http://localhost:${port}`))