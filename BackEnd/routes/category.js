var express = require('express');
var router = express.Router();
var multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    //gdzie pliki są przechowywane
    destination: function (req, file, callback){
        callback(null, path.join(__dirname, '../public/images'));
    },

    filename:function (req, file, callback){
        callback(null, Date.now() + file.originalname);
    }
})

const upload = multer({
    storage: storage,
    limit:{
        fieldSize: 1200*1200*3
    }
})

let Category = require('../models/category')
let Note = require('../models/note')


router.get('/', function(req, res, next) {
    Category.find({}, function (err, allCat){
        if(err)
            throw err
        res.render('category/list.ejs', {category: allCat})
    })
});
router.get('/create', isAdmin, function(req, res, next) {
    res.render('category/create');

});

router.get('/:id', function (req, res){
    Category.findById(req.params.id, function (err, category){
        if(err){
            console.log(err)
        }
        else{
            res.render('category/category',{category:category})
        }
    })
})

router.get('/:id/delete', isAdmin, function (req, res){
    Category.findByIdAndRemove(req.params.id, function (err){
        if(err){
            console.log(err)
        }else{
            Note.deleteMany({category_id: req.params.id}, function (err){
                if(err)
                    console.log(err)
            })
            res.redirect('/category')
        }
    })
})

router.post('/create', upload.single('image'), function (req, res){
    let category = new Category()
    category.name = req.body.name;
    category.description = req.body.description;
    category.image = req.file.filename;
    category.save(function(err){
        if(err){
            console.log(err);
            return
        }else{
            res.redirect('/category')
        }
    })
})


module.exports = router;


function isAdmin(req, res, next) {
    if (req.isAuthenticated()){
        if(req.user.local.role === "admin")
            return next()
    }
    console.log("you are not admin")
    res.redirect('/');
}