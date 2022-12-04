import { HttpMethods } from '@/utils/http-methods';
import type { NextApiRequest, NextApiResponse } from 'next';
import userController from '@/app/controllers/user.controller';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case HttpMethods.GET:
      userController.createUser(req, res);
    default:
      break;
  }
}
