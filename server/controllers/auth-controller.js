import User from "../models/User.js";
import bcrypt from "bcryptjs";
//!Register
export const register = async (req, res) => {

    try {
        const {username, password} = req.body;
        const isUsed = await User.findOne({username})
        if (isUsed) {
            return res.json({
                message: `This username have already used`
            })
        }
        const salt = bcrypt.genSaltSync(8);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = new User({
            username,
            password: hash
        });
        await newUser.save()
        res.json({
            newUser,
            message:`Registration Was Successful`
        })

    } catch (err) {

    }

};
//!Login
export const login = async (req, res) => {

};
//!Get Me
export const getMe = async (req, res) => {

}