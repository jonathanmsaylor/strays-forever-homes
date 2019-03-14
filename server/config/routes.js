var cats = require('./../controllers/catquestions.js');
var path = require('path');

module.exports = function(app){
    app.get('/api/cats', cats.index);
    app.get('/api/cats/new', cats.createQuestion);
    app.post('/api/cats/new', cats.createQuestion);
    app.get('/api/cats/:id/edit', cats.edit);
    app.post('/api/cats/:id/update', cats.update);
    // app.post('/api/cats/:id/delete', cats.delete);

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}