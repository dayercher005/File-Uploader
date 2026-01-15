import { Router } from 'express';
import { renderSignUpForm } from '../../controllers/Sign-Up/renderSignUpForm.ts';

export const SignUpRouter = Router();

SignUpRouter.get("/", renderSignUpForm);