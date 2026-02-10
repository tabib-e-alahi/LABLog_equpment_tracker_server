import { Router } from "express";
import { logController } from "./log.controller";

const usageLogRouter = Router();

usageLogRouter.post("/", logController.createUsageLog);