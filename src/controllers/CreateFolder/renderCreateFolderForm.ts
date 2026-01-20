import type { Request, Response} from 'express';

export function renderCreateFolderForm(req: Request, res: Response){
    res.render("CreateFolder/createFolder");
}