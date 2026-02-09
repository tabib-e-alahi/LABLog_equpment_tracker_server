import { Equipment } from "../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createEquipment = async (payload: Equipment) => {
    const equipment = await prisma.equipment.create({
      data: payload
    })
};

export const equipmentService = {
    createEquipment,
};
