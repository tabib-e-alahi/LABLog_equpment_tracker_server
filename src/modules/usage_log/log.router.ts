import { Router } from "express";
import { usageLogController } from "./log.controller";
import auth from "../../middleware/auth";
// import { Role } from "../../generated/prisma/enums";

const usageLogRouter = Router();

//create usage data route
usageLogRouter.post("/", auth("Admin"), usageLogController.createUsageLog);

usageLogRouter.get("/", usageLogController.getUsageLog);

usageLogRouter.patch("/:id", auth("Admin", "Student"), usageLogController.updateUsageLog);

export default usageLogRouter;
