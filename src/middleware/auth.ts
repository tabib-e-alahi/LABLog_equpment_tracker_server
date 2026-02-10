import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const auth = (roles?: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization?.split(" ")[1];
            if (!token) throw new Error("Unauthorized Access!");

            const decode = jwt.verify(token, "secret");
            if (!decode) throw new Error("Forbidden!");

            next();
        } catch (error) {
            console.error(error);
        }
    };
};
