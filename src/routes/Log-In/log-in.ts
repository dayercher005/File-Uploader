import { Router } from 'express';
import { renderLogInForm } from '../../controllers/Log-In/renderLogInForm.ts';
import { sendLogInForm } from '../../controllers/Log-In/sendLogInForm.ts';

export const LogInRouter = Router(); 

LogInRouter.get("/", renderLogInForm);
LogInRouter.post("/", sendLogInForm);