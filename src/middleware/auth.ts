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

            if(roles && !roles.includes(req.user.role)) th
            next();
        } catch (error) {
            console.error(error);
        }
    };
};

export default auth;
