import type { Request, Response } from 'express';

export function renderDashboardPage(req: Request, res: Response){
    res.locals.user = req.user

    res.render("Dashboard/dashboard");
}