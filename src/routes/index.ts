import { Router } from "express";
import userRouter from "../modules/user/user.router";
import equipmentRouter from "../modules/equipment/equipment.router";
import usageLogRouter from "../modules/usage_log/log.router";

const routes = Router();

routes.use("/user", userRouter);

routes.use("/equipment", equipmentRouter);

routes.use("/usagelog", usageLogRouter);

export default routes;
