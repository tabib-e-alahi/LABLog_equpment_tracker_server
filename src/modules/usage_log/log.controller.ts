import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const createUsageLog: RequestHandler = async (req, res) => {
    try {
        const payload = req.body;

        const log = await prisma.usageLog.create({
            data: { ...payload, userId: req.user.id },
        });
        res.status(200).json({ message: "usage added", data: log });
    } catch (error) {
        console.error(error);
    }
};

const getUsageLog: RequestHandler = async (req, res) => {
    try {
        const log = await prisma.usageLog.findMany({
            include: {
                user: {
                    select: {
                        name: true,
                        email: true,
                        role: true,
                        isActive: true,
                    },
                },
                equipment: {
                    select: {
                        name: true,
                        serialNumber: true,
                        location: true,
                        metadata: true,
                    },
                },
            },
        });
        res.status(200).json({ message: "Usage Logs Data", data: log });
    } catch (error) {
        console.error(error);
    }
};

const updateUsageLog: RequestHandler = async (req, res) => {
  const { id } = req.params;
//   if (!id) return res.send("Please provide id");

//   try {
//     const log = await prisma.usageLog.update({
//       where: { id },
//       data: {
//         endTime: new Date(),
//       },
//     });

//     res.send({ message: "log", data: log });
//   } catch (error) {
//     res.send({ message: "log getting error", error });
//   }
};

export const usageLogController = {
    createUsageLog,
    getUsageLog,
    updateUsageLog
};
