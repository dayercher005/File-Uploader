import type { Request, Response} from 'express';
import { body, validationResult, matchedData } from 'express-validator';

const validateCreateFileForm = [
    
]

export async function sendCreateFileForm(req: Request, res: Response){

    res.render('Dashboard/folder');
}