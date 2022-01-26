const { Warden } = require("../models");
const { compare, hash } = require("bcrypt");
const { sendSMS } = require("../lib/twilioSMS");

// Authorized --> 100
// Ok --> 200
// Error --> 404

class WardenController {

    response = { message: "", status: 0, data: null };

    async authLogin(req, res) {

        const { warden } = req.body;

        login: try {
            const wardenDoc = await Warden.findOne({ wardenId: warden.wardenId });

            if (!wardenDoc) {
                this.response.message = "You have passed the wrong id";
                this.response.status = 0;
                break login;
            }

            const isAuthorized = await compare(warden.password, wardenDoc.password);
            if (!isAuthorized) {
                this.response.message = "You have entered a wrong password";
                this.response.status = 0;
                break login;
            }

            this.response.message = "Warden is authorized to access the application";
            this.response.message = 100;
            this.response.data = wardenDoc;

        } catch (error) {
            console.error(error);
        } finally {
            res.send(this.response);
        }
    }

    async verifySMS(req, res) {
        const { authStatus } = req.query
        try {
            const wardenDoc = await Warden.findOne({ wardenId: req.body.wardenId });
            const random4DigitCode = Math.trunc(Math.random() * 1000);
            const data = await sendSMS(
                random4DigitCode,
                wardenDoc.verification_number
            );
            this.response.message = "code has been sent";
            this.response.status = 200;
            this.response.data = {
                code: random4DigitCode,
                expireTime: 5 * 60 * 1000,
            };
        } catch (error) {
            console.error(error);
        }
        res.send(this.response);
    }

    async registerWarden(req, res) {
        const { warden } = req.body;
        try {
            const hashedPassword = await hash(warden.password, 10);
            const wardenDoc = new Warden({
                name: warden.name,
                wardenId: warden.wardenId,
                password: hashedPassword,
            });

            const data = await wardenDoc.save();
            this.response.message = "Successfully Saved";
            this.response.status = 200;
            this.response.data = data;
        } catch (error) {
            (this.response.message = "Error Occured!"), (this.response.status = 404);
            this.response.data = error;
        }
        res.send(this.response);
    }

    async getWardenData(req, res) {
        const { id } = req.params;

        try {
            const wardenDoc = await Warden.findOne({ wardenId: id });

            if (!wardenDoc) {
                throw new Error("You have passed the wrong warden id");
            }

            this.response.message = "A warden with the provided id exists";
            this.response.data = wardenDoc;
            this.response.status = 200;
        } catch (error) {
            console.error(error);
            this.response.message = error.message;
            this.response.status = 400;
        }
        res.send(this.response);
    }
}

module.exports = new WardenController();
