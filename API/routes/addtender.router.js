import express from 'express';
const router = express.Router();

//to link controller
import * as AddTenderController from '../controller/addtender.controller.js';

 router.post("/save",AddTenderController.save);

router.get("/fetch",AddTenderController.fetch);

router.delete("/delete",AddTenderController.deleteTender);

router.patch("/update",AddTenderController.update);

export default router;


