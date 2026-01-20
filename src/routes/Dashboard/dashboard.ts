import { Router } from 'express';
import { renderDashboardPage } from '../../controllers/Dashboard/renderDashboardPage.ts';
import { renderIndividualFolder } from '../../controllers/Dashboard/renderIndividualFolder.ts';
import { renderIndividualFile } from '../../controllers/Dashboard/renderIndividualFile.ts';
import { authenticateRoute } from '../../config/authenticateRoute.ts';

export const DashboardRouter = Router();

DashboardRouter.get("/", authenticateRoute, renderDashboardPage);
DashboardRouter.get("/:folder", authenticateRoute, renderIndividualFolder);
DashboardRouter.get("/:folder/:file", authenticateRoute, renderIndividualFile);