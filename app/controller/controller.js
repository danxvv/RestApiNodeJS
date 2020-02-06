const Lampara = require('./../models/constumer.js');
exports.findAll = (req, res) => {
    Lampara.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};
exports.getOne = (req, res) => {
    Lampara.findById(req.params.lamparasId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.lamparasId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Customer with id " + req.params.lamparasId
                });
            }
        } else res.send(data);
    });
};

