var mongoose = require("mongoose");
var Question = mongoose.model('Question');

module.exports = {
    createQuestion: function (req, res) {
        console.log('hit create');
        var newQuestion = new Question(req.body);
        newQuestion.save(function (err) {
            if (err) {
                console.log('got errors');
                res.json(err);
            } else {
                console.log('success!');
                res.json(newQuestion);
            }
        })
    },
    index: function (req, res) {
        console.log('hit index controller');
        Question.find({}, function (err, breedname) {
            if (err) {
                console.log('got an error at index');
                res.json(err);
            } else {
                console.log('rendered questions');
                res.json(breedname);
            }
        })
    },
    edit: function (req, res) {
        Question.findOne({ _id: req.params.id }, function (err, breedname) {
            if (err) {
                res.json(err);
            } else {
                res.json(breedname);
            }
        });
    },
    // delete: (req, res) => {
    //     Question.deleteOne({ _id: req.params.id }, function (err) {
    //         if (err) {
    //             console.log("hit delete but got errors", err);
    //             res.json(err);
    //         } else {
    //             res.json({message: 'succesfully deleted'});
    //         }
    //     })
    // },
    showbreedname: function (req, res) {
        Question.findOne({ _id: req.params._id }, function (err, breedname) {
            if (err) {
                console.log('got errors from catquestions.js');
                res.json(err);
            } else {
                res.json(breedname);
            }
        });
    },
    update: function (req, res) {
        console.log('req.body', req.body);
        console.log('req.params', req.params);
        Question.findOne({ _id: req.params.id }, function (err, question) {
            console.log('hit update', err);
            console.log('pet', question);
            var updatedQuestion = new Question(req.body);
            question.breedname = req.body.breedname
            question.age = req.body.age
            question.sex = req.body.sex
            question.comfortablecatdog = req.body.comfortablecatdog
            question.comfortablekids = req.body.comfortablekids
            question.health = req.body.health


            question.save(function (err) {
                if (err) {
                    console.log('got errors');
                    res.json(err);
                } else {
                    res.json(question);
                }
            })
        })
    }
}
