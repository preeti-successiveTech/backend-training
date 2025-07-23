import express, { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

const router = express.Router();

router.get('/validate/:username', (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.params;
  const age = Number(req.query.age);

  if (!username || username.length < 3) {
    return next(createError(400, 'Username is required and must be at least 3 characters long.'));
  }

  if (!age || isNaN(age) || age < 18) {
    return next(createError(400, 'Age query parameter is required and must be a number greater than or equal to 18.'));
  }

  res.json({
    message: `User ${username} is valid with age ${age}.`,
  });
});

export default router;
