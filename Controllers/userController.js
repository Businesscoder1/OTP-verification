import dotenv from 'dotenv';
dotenv.config();
import twilio from 'twilio';

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

class userController {

  static userLogin = async (req, res) => {
    try {
      const { phonenumber } = req.body;
      const newPhonenumber = "+91" + phonenumber;

      // Ensure you have created a Twilio Verify Service in your Twilio console
      const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

      const params = {
        to: newPhonenumber,
        channel: 'sms', // or 'call' if you want to use voice
      };

      const response = await client.verify.services(verifyServiceSid)
        .verifications
        .create(params);

      console.log("OTP send response", response);
      res.status(200).send({ status: 'success', message: 'OTP sent successfully', sid: response.sid });
    } catch (error) {
      console.error("Unexpected error:", error);
      res.status(500).send({ status: 'error', message: 'An unexpected error occurred' });
    }
  };
}

export default userController;
