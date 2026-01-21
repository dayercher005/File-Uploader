import type { Request, Response} from 'express';
import { check, validationResult } from 'express-validator';
import multer from 'multer';
import { CreateFiles } from '../../lib/queries.ts';

export const MulterConfig = multer({ dest: './public/data/uploads'})

export const validateCreateFileForm = [
    check('file').custom(( value, { req }) => {
        if (!req.file){
            throw new Error("No File is provided")
        }

        if (req.file.size > 50000000) { // 50,000,000 bytes = 50MB
            throw new Error('File size limit exceeded (50MB)');
        }

        return true
    })
]

export async function sendCreateFileForm(req: Request, res: Response){

    res.locals.folderParameters = req.params.folder

    const errors = validationResult(req);
    if (!errors.isEmpty){
        res.status(404).render('partials.errors');
    }

    CreateFiles(req.file?.originalname, req.file?.size, req.params.folder)

    res.render(`Dashboard/folder`);
}