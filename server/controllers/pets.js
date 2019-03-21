var mongoose = require("mongoose");
var Cat = mongoose.model('Cat');
var Dog = mongoose.model('Dog');


module.exports = {
    
    index: function (req, res) {
        Promise.all([
            Cat.find({}).exec(),
            Dog.find({}).exec()
          ])
          .then(([cats, dogs]) => res.json({cats, dogs}))
          .catch((err) => res.json(err))
    },
    createCat: function (req, res) {
        console.log('hit create');
        var newCat = new Cat(req.body);
        newCat.save(function (err) {
            if (err) {
                console.log('got errors');
                res.json(err);
            } else {
                console.log('success!');
                res.json(newCat);
            }
        })
    },
    createDog: function (req, res) {
        console.log('hit create');
        var newDog = new Dog(req.body);
        newDog.save(function (err) {
            if (err) {
                console.log('got errors');
                res.json(err);
            } else {
                console.log('success!');
                res.json(newDog);
            }
        })
    },

    editCat: function (req, res) {
        Cat.findOne({ _id: req.params.id }, function (err, breedname) {
            if (err) {
                res.json(err);
            } else {
                res.json(breedname);
            }
        });
    },
    editDog: function (req, res) {
        Dog.findOne({ _id: req.params.id }, function (err, breedname) {
            if (err) {
                res.json(err);
            } else {
                res.json(breedname);
            }
        });
    },
    showCatBreedName: function (req, res) {
        Cat.findOne({ _id: req.params._id }, function (err, breedname) {
            if (err) {
                console.log('got errors from showcatbreedname');
                res.json(err);
            } else {
                res.json(breedname);
            }
        });
    },
    showDogBreedName: function (req, res) {
        Cat.findOne({ _id: req.params._id }, function (err, breedname) {
            if (err) {
                console.log('got errors from showdogbreedname');
                res.json(err);
            } else {
                res.json(breedname);
            }
        });
    },
    updateCat: function (req, res) {
        console.log('req.body', req.body);
        console.log('req.params', req.params);
        Cat.findOne({ _id: req.params.id }, function (err, cat) {
            console.log('hit update', err);
            console.log('cat', cat);
            var updatedCat = new Cat(req.body);
            cat.breedname = req.body.breedname
            cat.age = req.body.age
            cat.gender = req.body.gender
            cat.comfortablecatdog = req.body.comfortablecatdog
            cat.comfortablekids = req.body.comfortablekids
            cat.health = req.body.health


            cat.save(function (err) {
                if (err) {
                    console.log('got errors');
                    res.json(err);
                } else {
                    res.json(cat);
                }
            })
        })
    },
    updateDog: function (req, res) {
        console.log('req.body', req.body);
        console.log('req.params', req.params);
        Dog.findOne({ _id: req.params.id }, function (err, dog) {
            console.log('hit update', err);
            console.log('dog', cat);
            var updatedDog = new Dog(req.body);
            dog.breedname = req.body.breedname
            dog.age = req.body.age
            dog.gender = req.body.gender
            dog.comfortablecatdog = req.body.comfortablecatdog
            dog.comfortablekids = req.body.comfortablekids
            dog.health = req.body.health


            dog.save(function (err) {
                if (err) {
                    console.log('got errors');
                    res.json(err);
                } else {
                    res.json(dog);
                }
            })
        })
    },
}



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