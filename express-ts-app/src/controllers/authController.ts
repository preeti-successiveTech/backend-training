import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User1, { IUser } from "../models/userModel";

export class AuthController {
  static path = "/auth";
  public register = async (req: Request, res: Response) => {
    try {
      const { username, email, password, role } = req.body;
      const exists = await User1.findOne({ email });
      if (exists) return res.status(400).json({ error: "Email already used" });

      const user = await new User1({ username, email, password, role }).save();

      const token = jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" }
      );
      res.status(201).json({ token });
    } catch (err) {
      res.status(500).json({ error: "Server error" });
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await User1.findOne({ email });
      if (!user) return res.status(401).json({ error: "Invalid credentials" });

      const valid = await user.comparePassword(password);
      if (!valid) return res.status(401).json({ error: "Invalid credentials" });

      const token = jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" }
      );
      res.json({ token });
    } catch (err) {
      res.status(500).json({ error: "Server error" });
    }
  };
}
