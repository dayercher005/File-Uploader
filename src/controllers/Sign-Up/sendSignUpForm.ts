import { body, validationResult, matchedData } from 'express-validator';
import type { Request, Response } from 'express'; 
import bcrypt from 'bcryptjs';
import { prisma } from '../../../lib/prisma.ts';

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

export const sendSignUpForm = [
    validateSignUpForm, 
    async (req: Request, res: Response) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()){
            res.status(404).render("partials/error", {error: errors.array()})
        }

        const { name, email, password } = matchedData(req);
        const EncryptedPassword = await bcrypt.hash(password, 10);

        const users = await prisma.user.create({
            data: {
                name: name,
                username: email,
                password: EncryptedPassword,
            }
        });

        res.locals.users = users;

        res.redirect("/log-in");
    }
]