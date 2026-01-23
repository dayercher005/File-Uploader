import type { Request, Response} from 'express';
import { check, validationResult } from 'express-validator';
import multer from 'multer';
import { CreateFiles } from '../../lib/queries.ts';
import { UploadFile } from '../../config/supabase.ts';
import fs from 'fs';

// Multer Configuration (using memory storage)
export const MulterConfig = multer({ dest: './public/data'});


export const validateCreateFileForm = [
    check('file').custom(( value, { req }) => {
        if (!req.file){
            throw new Error("No File is provided")
        }

        if (req.file.size > 6000000) { // 6,000,000 bytes = 6MB
            throw new Error('File size limit exceeded (6MB)');
        }

        return true
    })
]

export async function sendCreateFileForm(req: Request, res: Response){

    res.locals.folderParameters = req.params.folder;

    const errors = validationResult(req);
    if (!errors.isEmpty){
        res.status(404).render('partials.errors');
    }

    CreateFiles(req.file?.originalname, req.file?.size, req.params.folder);

    UploadFile(req.file);

    res.redirect(`/dashboard/${req.params.folder}`);
}