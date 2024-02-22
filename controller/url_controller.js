const express = require("express")
const router = express.Router()
const Urls = require("../models/urls")

// Get All Urls
router.get('/', function (req, res, next) {
    console.log(Urls)
    Urls.find({}).then(function (url) {
        res.send(url);
    }).catch(next);
});

//Get One Url
router.get('/id/:id', function (req, res, next) {
    Urls.findOne({id: req.params.id}).then(function(url){
        res.send(url);
    }).catch(next);
});

//Get Url By User
router.get('/user/:user', function (req, res, next) {
    Urls.find({user: req.params.user}).then(function(url){
        res.send(url);
    }).catch(next);
});

// add a new Url or append if user exists
router.post('/', async function(req, res, next) {
    // return null;
    const {formattedurl, username, id } = req.body;
    // console.log("urls "+urls)
    console.log(username)
    try {
        let user = await Urls.findOne({ username });

        if (!user) {
            user = await Urls.create({ username,formattedurl,id });
        } else {
            user.formattedurl = user.formattedurl.concat(formattedurl);
            await user.save();
        }
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// update a Url
router.put('/:id',function(req,res,next){
    Urls.findOneAndUpdate({id: req.params.id},req.body).then(function(url){
        Urls.findOne({id: req.params.id}).then(function(url){
            res.send(url);
        });
    });
});

// delete a Url 
router.delete('/:id',function(req,res,next){
    Urls.findOneAndDelete({id: req.params.id}).then(function(url){
        res.send(url);
    });
});

// delete all Urls
router.delete('/',function(req,res,next){
    Urls.deleteMany(req.body).then(function(url){
        res.send(url);
    }).catch(next);
});

module.exports = router