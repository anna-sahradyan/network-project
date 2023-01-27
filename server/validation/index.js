import {body} from "express-validator";
export const registerValidator = [
    body("password","The password must contain at least 5 characters.").isLength({min: 5}),
    body("username","The username must contain at least 3 characters.").isLength({min: 3}),

];
export const loginValidator = [
    body("username","he username must contain at least 3 characters ").isLength({min: 3}),
    body("password","The password must contain at least 5 characters.").isLength({min: 5}),

];