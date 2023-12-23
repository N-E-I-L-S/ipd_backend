const connectToMongo = require('./db.js')
connectToMongo();

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

const port = 3001

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())

app.use('/urls', require('./url_controller'));

app.get('/', (req, res)=>{
    const timestamp = new Date().getTime()
    res.send(`${timestamp}`);
})


app.listen(port, () => console.log(`Server Running  on http://localhost:${port}`))