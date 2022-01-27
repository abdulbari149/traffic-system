const { compare, hash } = require("bcrypt");
const Citizen = require("../models/CitizenModel");

exports.loginCitizen = async ({ body: { citizen } }, res) => {
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
            status: 200,
            message: "You are authorized to use our service",
            data: foundCitizen
        })

    } catch (error) {
        res.status(400).send({
            status: 400,
            message: "Error occured!",
            error
        })
        console.error(error);
    }
}

exports.registerCitizen = async ({ body: { citizen } }, res) => {
    const { name, cnic, email, password, phone_number, city, country, address } = citizen;
    try {
        const hashedPassword = await hash(password, 10);
        const citizenDetails = new Citizen({ name, cnic, email, password: hashedPassword, phone_number, city, country, address });
        const accountAdded = await citizenDetails.save();
        res.status(201).send({
            status: 201,
            message: "Successfully saved!",
            data: accountAdded
        })
    } catch (error) {
        res.status(400).send({
            status: 400,
            message: "Error occured!",
            error
        })
        console.error(error);
    }
}

exports.getCitizen = async ({params: {id}}, res) => {
    try {
        const foundCitizen = await Citizen.findOne({_id: id});
        if (!foundCitizen) {
            res.status(404).send({
                status: 404,
                message: "You have passed wrong ID."
            });
        }
        res.status(200).send({
            status: 200,
            message: "Successfully fetched!",
            data: foundCitizen
        })
    } catch (error) {
        res.status(400).send({
            status: 400,
            message: "Error occured!",
            error
        })
        console.error(error);
    }
}