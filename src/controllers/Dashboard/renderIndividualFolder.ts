import type { Request, Response } from 'express';

export function renderIndividualFolder(req: Request, res: Response){

    const folderDetails = req.params.folder
    console.log(folderDetails);
    
    res.render("Dashboard/folder");
}