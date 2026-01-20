import type { Request, Response } from 'express';
import { ReadAllFolders } from '../../lib/queries.ts';

export async function renderDashboardPage(req: Request, res: Response){
    res.locals.user = req.user;
    console.log(res.locals.user.id);
    const allFolders = ReadAllFolders(res.locals.user.id);
    res.locals.folders = allFolders;
    console.log(res.locals.folders);

    res.render("Dashboard/dashboard");
}