import type { NextApiRequest, NextApiResponse } from 'next';
import userService from '@/app/services/user.service';

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await userService.createUser(req.body);
  return res.status(201).json(result);
};

const userController = {
  createUser,
}

export default userController;
