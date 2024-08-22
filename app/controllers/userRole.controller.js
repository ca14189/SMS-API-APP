import db from '../models/index.js';
const { user_Role: role } = db;

export const createRole = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: 'Content can not be empty!',
        });
        return;
    }

    // Create a role
    const Role = {
        name: req.body.name,
    };

    // Save Country in the database
    role.create(Role)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the Tutorial.',
            });
        });
};