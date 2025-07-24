import { Request, Response, NextFunction, RequestHandler } from 'express';

export interface IValidateRegistration {
  handle(): RequestHandler;
}

export class ValidateRegistration implements IValidateRegistration {
  public handle(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction): void => {
      const { username, email, password } = req.body;

      if (!username || !email || !password) {
        res.status(400).json({ error: 'Username, email, and password are required.' });
        return;
      }

      if (typeof username !== 'string' || username.trim().length < 3) {
        res.status(400).json({ error: 'Username must be at least 3 characters long.' });
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        res.status(400).json({ error: 'Invalid email format.' });
        return;
      }

      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      if (!passwordRegex.test(password)) {
        res.status(400).json({
          error:
            'Password must be at least 8 characters long and include at least one number, one uppercase letter, and one lowercase letter.',
        });
        return;
      }

      next();
    };
  }
}