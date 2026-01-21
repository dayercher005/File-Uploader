import type { Request, Response} from 'express';

export function renderCreateFileForm(req: Request, res: Response){
    res.render("CreateFile/createFile");
}