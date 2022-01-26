const { compare, hash } = require("bcrypt");
const Citizen = require("../models/CitizenModel");

exports.login = async ({body: {citizen}}, res) => {
    try {
        const foundCitizen = await Citizen.findOne({ email: citizen.email });

        if (!foundCitizen) {
            res.status(404).send({
                status: 404,
                message: "You have passed wrong credentials",
            })
        }

        const isAuthorized = await compare(citizen.password, foundCitizen.password);
        if (!isAuthorized) {
            res.status(404).send({
                status: 404,
                message: "You have entered a wrong password"
            })
        }

        res.status(200).send({
            status: "200",
            message: "You are authorized to use our service",
            data: foundCitizen
        })

    } catch (error) {
        console.error(error)
    }
}


