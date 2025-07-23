import express, { Request, Response, NextFunction } from "express";
import createError from "http-errors";

const router = express.Router();

router.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Promise.reject(
        createError(500, "Intentional async error occurred!")
      );

      res.send("Success");
    } catch (error) {
      next(error);
    }
  }
);

export default router;
