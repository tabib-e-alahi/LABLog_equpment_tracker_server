import { RequestHandler } from "express";
import { equipmentService } from "./equipment.service";

const createEquipment: RequestHandler = async (req, res) => {
    const equipment = await equipmentService.createEquipment();
};

export const equipmentController = {
    createEquipment,
};
