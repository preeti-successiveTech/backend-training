import { NextFunction, Request, Response } from "express";
import { Orders } from "../models/orders";

export const itemController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Orders.find();
    if (!data) {
      return res.status(403).json({ err: "data is not found" });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};
