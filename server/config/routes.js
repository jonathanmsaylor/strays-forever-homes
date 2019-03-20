var pets = require('./../controllers/pets.js');
var path = require('path');

module.exports = function(app){
    app.get('/api/pets', pets.index);
    app.get('/api/pets/newcat', pets.createCat);
    app.post('/api/pets/newcat', pets.createCat);
    app.get('/api/pets/newdog', pets.createDog);
    app.post('/api/pets/newdog', pets.createDog);
    app.get('/api/pets/:id/editcat', pets.editCat);
    app.post('/api/pets/:id/updatecat', pets.updateCat);
    app.get('/api/pets/:id/editdog', pets.editDog);
    app.post('/api/pets/:id/updatedog', pets.updateDog);
    // app.post('/api/pets/:id/deletecat', pets.deleteCat);
    // app.post('/api/pets/:id/deleteDog', pets.deleteDog);


    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}