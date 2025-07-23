import express, { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

const router = express.Router();
type RouteHandler = (req: Request, res: Response, next: NextFunction) => void;


const errorRoutes: Record<string, RouteHandler> = {
  '400': (req, res, next) => next(createError(400, 'Bad Request Example')),
  '401': (req, res, next) => next(createError(401, 'Unauthorized Access')),
  '403': (req, res, next) => next(createError(403, 'Forbidden Resource')),
  '404': (req, res, next) => next(createError(404, 'Custom Not Found')),
  '405': (req, res, next) => next(createError(405, 'POST Not Allowed Here')),
  '409': (req, res, next) => next(createError(409, 'Conflict Example')),
  '422': (req, res, next) => next(createError(422, 'Unprocessable Data')),
  '500': (req, res, next) => next(createError(500, 'Internal Server Error Example')),
  '502': (req, res, next) => next(createError(502, 'Bad Gateway Example')),
  '503': (req, res, next) => next(createError(503, 'Service Unavailable')),
  '504': (req, res, next) => next(createError(504, 'Gateway Timeout')),
};

for (const [code, handler] of Object.entries(errorRoutes)) {
  const method = code === '405' ? 'post' : 'get';
  router[method as 'get' | 'post'](`/${code}`, handler);
}

export default router;
