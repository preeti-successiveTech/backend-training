// src/middleware/dynamicValidation.ts
import { Request, Response, NextFunction } from 'express';
import { checkSchema, validationResult } from 'express-validator';
import { validationRules } from '../config/validationRules';

export const dynamicValidation = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const path = req.route?.path;
    const schema = path ? validationRules[path] : undefined;

    if (schema) {
      await checkSchema(schema).run(req);
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    }

    next();
  };
};
