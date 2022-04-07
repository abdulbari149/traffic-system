const { Router } = require("express");
const { ChallanController } = require("../controllers");
const { verifyAuthToken } = require("../middlewares/authTokenVerification");
const {
  validationRequestSchema,
} = require("../middlewares/validationRequestSchema");
const { accessDB } = require("../middlewares/conditionalAccess");

const { challanValidator } = require("../helpers/validators");
const router = Router();

router
  .post(
    "/",
    verifyAuthToken,
    challanValidator(),
    validationRequestSchema,
    ChallanController.submitChallan
  );
router.get("/:user", accessDB, verifyAuthToken, ChallanController.getChallans)
router.get("/:user/records", verifyAuthToken, ChallanController.getChallanRecords)
router.get("/:user/records/:challan_id", verifyAuthToken, ChallanController.getChallanById)
module.exports = router;
