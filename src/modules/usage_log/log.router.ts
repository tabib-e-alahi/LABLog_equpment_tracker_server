import { Router } from "express";
import { usageLogController } from "./log.controller";
import auth from "../../middleware/auth";
import { Role } from "../../generated/prisma/enums";

const usageLogRouter = Router();

usageLogRouter.post("/", auth(Role.Admin), usageLogController.createUsageLog);

usageLogRouter.get("/", usageLogController.getUsageLog);

usageLogRouter.patch("/:id", auth(Role.Admin, Role.Student), usageLogController.updateUsageLog);

export default usageLogRouter;
