import { User } from "../../generated/prisma/client";
import bcrypt from "bcrypt"

const register = async (payload: User) => {
    try {
      const hashedPass = await bcrypt.hash(payload.password, 10);
    } catch (error) {}
};

export const userService = {
    register,
};
