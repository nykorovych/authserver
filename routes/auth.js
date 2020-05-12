const router = require('express').Router();


router.post ('/register', (req,res) => {
    res.send ('Pepeg');
});

router.post ('/login', (req,res) => {
    res.send ('Login Pepeg');
}); 


module.exports = router;