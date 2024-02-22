const express = require("express")
const router = express.Router()
const Survey = require("../models/survey")

router.get('/', function (req, res, next) {
    console.log(Survey)
    Survey.find({}).then(function (url) {
        res.send(url);
    }).catch(next);
});

router.post('/',function(req,res,next){
    Survey.create(req.body).then(function(survey){
        res.status(200)
        res.send(survey);
    }).catch(next);
});

module.exports = router