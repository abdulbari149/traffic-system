const { Router } = require("express");
const {CitizenController} = require("../controllers");
const router = Router();

router.post('/auth/login', CitizenController.authLogin);
// /api/citizen/auth/login 

router.post('/auth/register', CitizenController.registerCitizen);
// /api/citizen/auth/register 

router.get('/:id', CitizenController.getCitizenData);
// /api/citizen/auth/:id 

module.exports = router;