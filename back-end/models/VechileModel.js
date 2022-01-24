// Id
// 	Type
// 	Type of Vehicle
// 	Registration number
// 	Vehicle Identification Number VIN
// 	Registration date
// 	Owner name
// 	Owner CNIC
// 	Engine number
// 	Chassis Number
// 	Color
// 	Horse power
// 	Seating capacity
// 	Company
// 	Vehicle Model
// 	Body type
// 	Model year

const { Schema, model } =require("mongoose")

const VechileSchema = new Schema({
    vehicleType: String,
    vehicle_identification_numbeer: {
        type: String,
        alias: "vin",
    },
    vehicle_category: {
        type: String,
    },
    vechile_model: String,
    vechile_model_year: String,
    vechile_body: String,
    reg_no: String,
    reg_date: Date,
    owner_name: String,
    owner_cnic:String,
    engine_no: Number,
    chasis_no: Number,
    color: String,
    horse_power:Number,
    seating_capacity: Number,
    company: String,
})

module.exports = model("vechile", VechileSchema)