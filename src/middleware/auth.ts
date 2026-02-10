import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
    namespace Express {
        interface Request {
            user: JwtPayload;
        }
    }
}

const auth = (roles?: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization?.split(" ")[1];
            if (!token) throw new Error("Unauthorized Access!");

            const decode = jwt.verify(token, "tabib secret");
            if (!decode) throw new Error("Forbidden!");

            req.user = decode as JwtPayload;

            if (roles && !roles.includes(req.user.role))
                throw new Error("Forbidden!");

            next();
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Unauthorized Access!",
                error,
            });
        }
    };
};

export default auth;
