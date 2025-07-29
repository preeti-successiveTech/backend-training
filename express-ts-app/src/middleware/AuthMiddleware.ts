import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface JwtPayload {
  id: string;
  email: string;
  role: string;
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(403).json({ error: "Token required" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    (req as any).user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ error: "Invalid token" });
  }
};

export const verifyRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = (req as any).user.role;

    if (!roles.includes(userRole)) {
      return res
        .status(403)
        .json({ error: "Forbidden: You do not have permission" });
    }

    next();
  };
};
