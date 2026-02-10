import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const createUsageLog: RequestHandler = async (req, res) => {
    try {
        const payload = req.body;

        const log = await prisma.usageLog.create({
            data: payload,
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

export const usageLogController = {
    createUsageLog,
    getUsageLog,
};
