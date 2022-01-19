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
    vechileType: {
        type: String,
    },
    registrationNumber: {
        type: String,
        validate: () => {
            
        }
    }
})