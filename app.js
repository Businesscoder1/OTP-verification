import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'; 

const app = express();
const port = process.env.PORT ||8000;
console.log(process.env.PORT)

// CORS policy
app.use(cors());
// app.use(function(req,res,next){
//     next();
// });
// app.set("view engine","ejs");
app.use(express.json());

app.use('/api/user', userRoutes);
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


class userController {
    
    static userLogin = async (req, res) => {
        res.status(200).send({ "message": "OTP sent Successfully" });
    };
}

// export default userController;
