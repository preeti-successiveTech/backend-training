// controllers/HealthCheckController.ts
import { Request, Response, Router } from 'express';

export class HealthCheckController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.get('/health', this.checkHealth);
  }

  private checkHealth(req: Request, res: Response): void {
    const uptimeInSeconds = process.uptime().toFixed(2);

    res.status(200).json({
      status: 'ok',
      uptime: `${uptimeInSeconds}s`,
      timestamp: new Date().toISOString(),
    });
  }
}
