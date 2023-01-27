import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//!Register

export const register = async (req, res) => {
    try {
        const { username, password } = req.body

        const isUsed = await User.findOne({ username })

        if (isUsed) {
            return res.json({
                message: `This username have already used`,
            })
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = new User({
            username,
            password: hash,
        })

        const token = jwt.sign(
            {
                id: newUser._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: '30d' },
        )

        await newUser.save()

        res.json({
            newUser,
            token,
            message: `Registration Was Successful`,
        })
    } catch (error) {
        res.json({ message: `You aren't registration ` })
    }
}
//!Login
export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if (!user) {
            return res.json({
                message: `No such user`
            });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
            return res.json({
                message: `incorrect password`
            })
        }
        const token = jwt.sign({
            id: user._id,

        }, process.env.JWT_SECRET, {expiresIn: `30d`})
        res.json({
            token,
            user,

        })
    } catch (err) {
        res.status(500).json({
            message: "couldn't authorisation"
        });
    }


};
//!Get Me
export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId);

        if (!user) {
            return res.json({
                message: `No such user`
            });
        }
        const token = jwt.sign({
                id: user._id,

            }, process.env.JWT_SECRET,
            {expiresIn: `30d`});
     res.json({
            user,
            token,

        })

    } catch (err) {
        res.json({
            message: "No access ",
        });
    }

}
