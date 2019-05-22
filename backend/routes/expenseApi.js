const express = require("express");
const router = express.Router();
const Operation = require("../db/dataModels/operations");
const passport = require("passport");
const { validateOperation } = require('../helpers/validationHelper')

router.post("/createoperation", passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateOperation({ ...req.body });

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newOperation = new Operation({
        userId: req.user.id,
        title: req.body.title,
        isIncome: req.body.isIncome,
        description: req.body.description,
        amount: req.body.amount,
        createDate: new Date()
    });

    newOperation.save().then(operation => {
        return res.status(200).json({ operation });
    });
});

router.get('/getalloperations', passport.authenticate('jwt', { session: false }), (req, res) => {
    Operation.find({ userId: req.user.id }).limit(10).sort([['createDate', -1]]).then(operations => {
        return res.status(200).json({ operations })
    }).catch(err => {
        return res.status(500).json({ error: err.message })
    })
});

router.get('/getoperation/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Operation.findById(req.params.id).then(operation => {
        return res.status(200).json({ operation });
    }).catch(err => {
        return res.status(500).json({ error: err.message })
    })
});


router.get('/getbalance', passport.authenticate('jwt', { session: false }), (req, res) => {
    Operation.find({ userId: req.user.id }).then(operations => {
        if (!operations.length) {
            return res.status(200).json({ balance: 0 });
        }
        const balance = operations.map(x => x.amount).reduce((x, y) => x + y);
        return res.status(200).json({ balance });
    }).catch(err => {
        return res.status(500).json({ error: err.message })
    })
});

module.exports = router;
