import { Router } from 'express';
import { renderDashboardPage } from '../../controllers/Dashboard/renderDashboardPage.ts';
import { renderIndividualFolder } from '../../controllers/Dashboard/renderIndividualFolder.ts';
import { renderIndividualFile } from '../../controllers/Dashboard/renderIndividualFile.ts';
import { renderCreateFileForm } from '../../controllers/CreateFile/renderCreateFileForm.ts';
import { sendCreateFileForm } from '../../controllers/CreateFile/sendCreateFileForm.ts';
import { authenticateRoute } from '../../config/authenticateRoute.ts';

export const DashboardRouter = Router();

DashboardRouter.get("/", authenticateRoute, renderDashboardPage);
DashboardRouter.get("/:folder", authenticateRoute, renderIndividualFolder);
DashboardRouter.get("/:folder/:file", authenticateRoute, renderIndividualFile);
DashboardRouter.get("/:folder/create-file", authenticateRoute, renderCreateFileForm);
DashboardRouter.post("/:folder/create-file", sendCreateFileForm);