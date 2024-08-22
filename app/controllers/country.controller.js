import db from '../models/index.js';
const { countries: Country } = db;

export const findAllCountries = (req, res) => {
    Country.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving countries.',
            });
        });
};


export const getById = (req, res) => {
    const id = req.params.id;
    Country.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Country with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Error retrieving Country with id=' + id,
            });
        });
};

export const deleteCountry = (req, res) => {
    const id = req.params.id;

    Country.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: 'Country was deleted successfully!',
                });
            } else {
                res.send({
                    message: `Cannot delete Country with id=${id}. Maybe Country was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Could not delete Country with id=' + id,
            });
        });
};


export const updateCountry = (req, res) => {
    const id = req.params.id;

    Country.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: 'Country was updated successfully.',
                });
            } else {
                res.send({
                    message: `Cannot update Country with id=${id}. Maybe Country was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Error updating Country with id=' + id,
            });
        });
};


export const createCountry = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: 'Content can not be empty!',
        });
        return;
    }

    // Create a Country
    const country = {
        name: req.body.name,
        isoName: req.body.isoName,
    };

    // Save Country in the database
    Country.create(country)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the Tutorial.',
            });
        });
};

