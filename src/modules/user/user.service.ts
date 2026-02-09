import { User } from "../../generated/prisma/client";
import bcrypt from "bcrypt"
import { prisma } from "../../lib/prisma";

const register = async (payload: User) => {
    try {
      const hashedPass = await bcrypt.hash(payload.password, 10);

      const user = await prisma.user.create({
            data: {
                  ...payload, password: hashedPass
            }
      })

      return user;

    } catch (error) {
      
    }
};

export const userService = {
    register,
};
