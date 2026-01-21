import type { Request, Response } from 'express';

export function renderIndividualFolder(req: Request, res: Response){

    res.locals.folderParameters = req.params.folder;
    
    res.render("Dashboard/folder");
}