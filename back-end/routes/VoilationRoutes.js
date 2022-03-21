
const { Router } = require("express");
const { VoilationController } = require("../controllers");
const router = Router();

router.post('/get-voilation', VoilationController.getVoilations);

router.put("/update-price", VoilationController.updateVoiationPrice);


module.exports = router;