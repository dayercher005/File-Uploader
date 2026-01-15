import { body, validationResult, matchedData } from 'express-validator';
import type { Request, Response, NextFunction } from 'express'; 
import passport from 'passport';

const validateLogInForm = [
    body("email")
    .notEmpty()
    .isEmail()
    .withMessage("Please enter a valid email address"),
    body("password")
    .notEmpty()
    .withMessage("Password cannot be empty")
]

export const sendLogInForm = [
    validateLogInForm,
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(404).render("partials/error", {error: errors.array()})
        }
        next();
    },
    passport.authenticate("local", {
        successRedirect: "/dashboard",
        failureRedirect: "/"
    })
]