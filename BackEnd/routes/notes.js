var express = require('express');
var router = express.Router();

let Note = require('../models/note')
let Category = require('../models/category')

//get
router.get('/', function(req, res, next) {
    Note.find({}, function (err, allNotes){
        if(err)
            throw err
        res.render('notes/list.ejs', {notes: allNotes})
    })
});
router.get('/create', isLoggedIn, function(req, res, next) {
    res.render('notes/create');

});
router.get('/:id', function (req, res){
    Note.findById(req.params.id, function (err, note){
        if(err){
            console.log(err)
        }
        else{
            res.render('notes/note',{note:note})
        }


    })
})
router.get('/:id/update',  function (req, res){
    if (!req.isAuthenticated())
    {
        console.log("please log in")
        res.redirect('/login')
    } else{
        Note.findById(req.params.id, function (err, note){
            if(err){
                console.log(err)
            }
            else{
                if(req.user._id == note.author_id || req.user.local.role == "admin" ){
                    res.render('notes/update',{
                        note:note
                    })

                }
                else{
                    console.log("u are not author of this note")
                    res.redirect("/notes")
                }
            }
        })
    }






})

router.get('/:id/delete', isAdmin, function (req, res){
    Note.findByIdAndRemove(req.params.id, function (err){
        if(err){
            console.log(err)
        }else{
            res.redirect('/notes')
        }
    })
})

//post
router.post('/create', function (req, res){
    //var cat_name = req.params.category
    Category.findOne({name: req.body.category}, function (err, category){
        if(err)
            console.log(err)
        if (category){
            let note = new Note()
            note.name = req.body.name;
            note.content = req.body.content;
            note.author = req.user.local.name;
            note.author_id = req.user._id
            note.category = req.body.category
            note.category_id = category._id
            // User.findById(req.user._id, function (err,user){
            //     if(err)
            //         console.log(err)
            //     note.author = user.name
            // })

            note.save(function(err){
                console.log()
                if(err){
                    console.log(err);
                    return
                }else{
                    res.redirect('/notes')
                    res.end()
                }
            })
        }
        else{
            console.log("there is no such category")
            res.redirect("/category")
        }
    })


})

router.post('/:id/update', function (req, res){
    let note = {}
    note.name = req.body.name;
    note.content = req.body.content;
    //note.author = req.body.author;

    Note.update({_id:req.params.id},note, function(err){
        if(err){
            console.log(err);
            return
        }else{
            res.redirect('/notes')
        }
    })
})


module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}


function isAdmin(req, res, next) {
    if (req.isAuthenticated()){
        // User.findById(req.user._id, function (err,user){
        //     if(err)
        //         console.log(err)
        //     if(user.role == "admin")
        //         return next()
        // })
        if(req.user.local.role === "admin")
            return next()
    }
    console.log("you are not admin")
    res.redirect('/');
}