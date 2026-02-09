import { RequestHandler } from "express";
import { equipmentService } from "./equipment.service";

const createEquipment: RequestHandler = async (req, res) => {
    try {
      const payload = req.body;
      const equipment = await equipmentService.createEquipment(payload);
    } catch (error) {
      
    }
};

export const equipmentController = {
    createEquipment,
};
