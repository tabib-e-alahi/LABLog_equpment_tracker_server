import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const createLog: RequestHandler = async (req, res) => {
    try {
        const payload = req.body;

        const data = await prisma.usageLog.create({
            data: payload,
        });
        res.status(200).json({ message: "usage added", data });
    } catch (error) {
        console.error(error);
    }
};

export const logController = {
    createLog,
};
