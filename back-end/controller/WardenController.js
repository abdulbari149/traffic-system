const { Warden } = require("../models")
const { compare } = require("bcrypt")
const response = {
    message: "",
    status: 0, 
    data: null
}
// Authorized --> 100
class WardenController{
    async authLogin(req, res){
        const { warden } = req.params
        login: try {
            const dbWarden = await Warden.findOne({ wardenId: warden.wardenId })
            if(!dbWarden) {
                response.message = "You have passed the wrong id"
                response.status = 0
                break login
            }

            const isAuthorized = await compare(warden.password, dbWarden.password)

            if(!isAuthorized) {
                response.message = "You have entered a wrong password"
                response.status = 0
                break login
            }
            
            response.message = "Warden is authorized to access the application"
            response.message = 100
            response.data = dbWarden
            
        } catch (error) {
            console.error(error)
        } finally{
            res.send(response)
        }
    
    }

    async registerWarden(req, res){
        const { warden } = req.params
        try {           
            const newWarden = await Warden.create(warden)




        } catch (error) {
            
        }
    }
}

module.exports = new WardenController()