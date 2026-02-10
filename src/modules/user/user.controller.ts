import { RequestHandler } from "express";
import { userService } from "./user.service";
import { prisma } from "../../lib/prisma";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) throw new Error("User not found!");

        const matchPassword = bcrypt.compare(password, user.password);
        if (!matchPassword) throw new Error("Invalid Password!");
        const token = await jwt.sign(
            { id: user.id, role: user.role },
            "tabib secret",
            { expiresIn: "7d" },
        );

        return res.status(201).json({
            success: true,
            message: "Login successfull",
            token,
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
