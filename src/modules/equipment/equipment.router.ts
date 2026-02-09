import { Router } from "express";
import { equipmentController } from "./equipment.controller";

const equipmentRouter = Router();

equipmentRouter.post("/", equipmentController.createEquipment);

export default equipmentRouter;
