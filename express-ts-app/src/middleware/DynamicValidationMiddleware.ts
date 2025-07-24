import { Request, Response, NextFunction, RequestHandler } from 'express';
import { checkSchema, validationResult } from 'express-validator';
import { validationRules } from '../config/validationRules';

export class DynamicValidationMiddleware {
  public handle(): RequestHandler {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      const path = req.route?.path;
      const schema = path ? validationRules[path] : undefined;

      if (schema) {
        await checkSchema(schema).run(req);
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          res.status(400).json({ errors: errors.array() });
          return;
        }
      }

      next();
    };
  }
}