import { Router } from "express";
import { itemController } from '../controllers/itemController';

const router = Router();
router.get('/',itemController); 

export default router;