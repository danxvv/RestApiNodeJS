const sql = require('./../../db');

const Lamparas = function (lampara) {
    this.estado = lampara.estado;
    this.zona = lampara.zona;
};

Lamparas.findById = (lamparasId, result) => {
    sql.query(`SELECT * FROM postes WHERE id = ${lamparasId}`, (err, res) => {
        if (err) {
            console.log('error', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('Lampara encontrada', res[0]);
            result(null, res[0]);
            return;
        }
        result({kind: 'Not Found'}, null);
    });
};

Lamparas.getAll = result => {
    sql.query("SELECT * FROM postes", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("lamparas: ", res);
        result(null, res);
    });
};

module.exports = Lamparas;