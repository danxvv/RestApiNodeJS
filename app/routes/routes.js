module.exports = app=>{
    const lamparas = require("./../controller/controller");
    app.get('/lamparas', lamparas.findAll);
    app.get('/lamparas/:lamparasId',lamparas.getOne);
};