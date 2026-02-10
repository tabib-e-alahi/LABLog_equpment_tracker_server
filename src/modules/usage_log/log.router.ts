import { Router } from "express";
import { usageLogController } from "./log.controller";
import auth from "../../middleware/auth";

const usageLogRouter = Router();

usageLogRouter.post("/", auth(), usageLogController.createUsageLog);

usageLogRouter.get("/", usageLogController.getUsageLog);

export default usageLogRouter;
