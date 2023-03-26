import { Router } from "express";
import { methods as capacityController } from "../controllers/capacity.controles";

const router = Router();

/**routes connecciones */
router.get('/list', capacityController.getCapacitys);
router.get('/show/:id', capacityController.getCapacity);
router.post('/create', capacityController.createNewCapacity);
router.put('/edit/:id', capacityController.editCapacity);

export default router