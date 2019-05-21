const express = require("express");
const router = express.Router();
const Operation = require("../db/dataModels/operations");

router.post("/create", (req, res) => {
    const { errors, isValid } = validateSignUp(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    
    Operation.findOne({
        email: req.body.email
    }).then(user => {
        if (user) {
            return res.status(400).json({
                email: "Email already exists"
            });
        }
        const avatar = gravatar.url(req.body.email, {
            s: "200",
            r: "pg",
            d: "mm"
        });
        
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            registeredAt: new Date(),
            updatedAt: new Date(),
            initials: req.body.firstName[0] + req.body.lastName[0],
            password: req.body.password,
            avatar
        });
        
        newUser.save().then(user => {
            authenticate(user, res);
        });
    });
});

router.post("/signin", (req, res) => {
    
});

router.get('/getall', passport.authenticate('jwt', { session: false }), (req, res) => {
    Operation.find({userId: req.user.id}).then(operations =>{

    }).catch(error => {

    })
});

module.exports = router;
