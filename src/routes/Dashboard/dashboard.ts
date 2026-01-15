import { Router } from 'express';
import { renderDashboardPage } from '../../controllers/Dashboard/dashboard.ts';

export const DashboardRouter = Router();

DashboardRouter.get("/", renderDashboardPage);