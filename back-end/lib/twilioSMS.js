const dotenv = require("dotenv")
dotenv.config({ encoding: false })

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

async function sendSMSVerificationCode(code, number){
    const response = await client.messages.create({
      body: `Your 4-digit code is: ${code}`,
      from: "+15075961142",
      to: number
    })
    return response

}

exports.sendSMS = sendSMSVerificationCode