import { body, validationResult, matchedData } from 'express-validator';
import type { Request, Response } from 'express'; 
import bcrypt from 'bcryptjs';

const validateSignUpForm = [
    body("name")
    .notEmpty()
    .withMessage("Please enter your full name"),
    body("email")
    .notEmpty()
    .isEmail()
    .withMessage("Please enter a valid email address"),
    body("password")
    .notEmpty()
    .withMessage("Password cannot be empty"),
    body("confirmPassword").custom((password:string , {req}) => {
        return password === req.body.password
    })
]

const sendSignUpForm = [
    validateSignUpForm, 
    async (req:Request, res:Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(404).render("partials/error", {error: errors.array()})
        }

        const { name, email, password } = matchedData(req);
        const EncryptedPassword = await bcrypt.hash(password, 10);

        res.redirect("/log-in");
    }
]