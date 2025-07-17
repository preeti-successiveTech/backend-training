import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
 export const secretkey = "Preeti";
export const authenticateToken = (req: Request, res: Response, next : NextFunction)=>{
      const authorization = req.headers['authorization'];
      const token = authorization && authorization.split(' ')[1];  // Bearer token

      if(!token )
      {
        return res.status(400).json({message :'Authentication denied'});
      }
       try {
    const decoded = jwt.verify(token, secretkey);
    (req as any).user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }
}