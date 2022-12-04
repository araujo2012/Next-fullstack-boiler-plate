import { User, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (user: User) => {
  const { username, password, email } = user;
  return prisma.user.create({ data: { username, password, email } });
};

const userService = {
  createUser,
}

export default userService;
