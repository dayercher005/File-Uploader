import type { Request, Response } from 'express';

export function renderIndividualFile(req: Request, res: Response){

    res.render("Dashboard/file");
}