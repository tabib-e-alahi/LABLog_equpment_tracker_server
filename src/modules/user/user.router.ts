import { Router } from "express";
import { userController } from "./user.controller";

const userRouter = Router();

//register a user
userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);

export default userRouter;
