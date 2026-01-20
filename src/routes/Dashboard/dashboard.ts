import { Router } from 'express';
import { renderDashboardPage } from '../../controllers/Dashboard/dashboard.ts';
import { authenticateRoute } from '../../config/authenticateRoute.ts';

export const DashboardRouter = Router();

DashboardRouter.get("/", authenticateRoute, renderDashboardPage);