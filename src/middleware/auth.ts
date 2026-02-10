import { Request, Response, NextFunction } from "express";

const auth = (roles?: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization?.split(" ")[1];
            if (!token) throw new Error("Un");
            
        } catch (error) {
            console.error(error);
        }
    };
};
