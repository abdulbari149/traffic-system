const Vechile = require("../models/VechileModel")

class VechileController {
    response = {
        data: null,
        message: "",
        status: 0
    }

    getVechileByCitizenCnic = async (req, res) => {
        const { cnic, citizenId } = req.body
        try {
            const vehicleDoc = await Vechile.find({ owner: { cnic }, _id: citizenId })

            if(!vechileDoc){
                throw new Error("The Vechile with the CNIC doesn't exist")
            }

            this.response.data = vehicleDoc
            this.response.message = "Vechiles Exist"
            this.response.status = 200


        } catch (error) {

            this.response.message = error.message
            this.response.status = 404
        }

        res.status(this.response.status).json(this.response)
    }

    getVechileByRegNo = async (req, res) => {
        const { reg_no } = req.body

        try {
            const vehicleDoc = await Vechile.find({ reg: {no: reg_no} }, "")
        } catch (error) {
            
        }

    }
}