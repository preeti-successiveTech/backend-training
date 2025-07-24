import { Request, Response, NextFunction, RequestHandler } from 'express';
import Joi from 'joi';

export interface IValidateRequest {
  handle(): RequestHandler;
}

export class ValidateRequest implements IValidateRequest {
  private schema: Joi.ObjectSchema;

  constructor(schema: Joi.ObjectSchema) {
    this.schema = schema;
  }

  public handle(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction): void => {
      const { error } = this.schema.validate(req.body);

      if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
      }

      next();
    };
  }
}

