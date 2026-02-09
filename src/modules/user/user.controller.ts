import { RequestHandler } from "express";
import { userService } from "./user.service";

const register: RequestHandler = async (req, res) => {
    try {
        const payload = req.body;
        const user = await userService.register(payload);

        return
    } catch (error) {}
};
