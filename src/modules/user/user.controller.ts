import { RequestHandler } from "express";
import { userService } from "./user.service";
import { prisma } from "../../lib/prisma";

const register: RequestHandler = async (req, res) => {
    try {
        const payload = req.body;
        const user = await userService.register(payload);

        return res.status(201).json({
            success: true,
            message: "user registered successfully.",
            data: user,
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: "user registration failed!!!.",
            error,
        });
    }
};

const login: RequestHandler = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await prisma.user.fin
        return res.status(201).json({
            success: true,
            message: "user registered successfully.",
            data: user,
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: "user registration failed!!!.",
            error,
        });
    }
};

export const userController = {
    register,
    login,
};
