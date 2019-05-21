const express = require("express");
const router = express.Router();
const Operation = require("../db/dataModels/operations");

router.post("/create", passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateSignUp(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newOperation = new Operation({
        userId: req.user.id,
        title: req.body.title,
        description: req.body.description,
        amoun: req.body.amount
    });

    newOperation.save().then(operation => {
        res.status(200);
    });
});

router.post("/signin", (req, res) => {

});

router.get('/getall', passport.authenticate('jwt', { session: false }), (req, res) => {
    Operation.find({ userId: req.user.id }).then(operations => {
        return res.status(200).json({ operations })
    }).catch(err => {
        return res.status(500).json({ error: err.message })
    })
});

module.exports = router;
