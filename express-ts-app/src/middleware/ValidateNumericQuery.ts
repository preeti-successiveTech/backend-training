import { Request, Response, NextFunction, RequestHandler } from 'express';

export class ValidateNumericQuery {
  private paramNames: string[];

  constructor(paramNames: string[]) {
    this.paramNames = paramNames;
  }

  public handle(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction): void => {
      for (const param of this.paramNames) {
        const value = req.query[param];

        if (value !== undefined) {
          if (Array.isArray(value)) {
            res.status(400).json({ error: `Query parameter '${param}' must be a single numeric value.` });
            return;
          }

          if (isNaN(Number(value))) {
            res.status(400).json({ error: `Query parameter '${param}' must be numeric.` });
            return;
          }
        }
      }
      next();
    };
  }
}