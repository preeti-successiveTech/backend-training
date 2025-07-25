import { Request, Response, NextFunction, Router } from 'express';
import { UserModel } from '../models/user';

export class UserController {
  public router = Router();
  private path = '/users';

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(this.path, this.createUser);
  }

  private createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newUser = new UserModel(req.body);
      const result = await newUser.save();
      res.status(201).json(result);
    } catch (err: any) {
      if (err.name === 'ValidationError') {
        const errors = Object.values(err.errors).map((e: any) => e.message);
        return res.status(400).json({ errors });
      }
      if (err.code === 11000) {
        return res.status(409).json({ error: 'Duplicate email not allowed' });
      }
      next(err);
    }
  };
}
