import { Router } from 'express';
import { renderLogInForm } from '../../controllers/Log-In/renderLogInForm.ts';

export const LogInRouter = Router(); 

LogInRouter.get("/", renderLogInForm);