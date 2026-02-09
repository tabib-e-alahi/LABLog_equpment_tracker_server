import { RequestHandler } from "express";
import { userService } from "./user.service";

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

export const userController = {
    register,
};
