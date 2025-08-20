import express from 'express';
const router = express.Router();

//to link controller
import * as SubcategoryController from '../controller/subcategory.controller.js';

router.post("/save",SubcategoryController.save);

router.get("/fetch",SubcategoryController.fetch);

router.delete("/delete",SubcategoryController.deleteSubCategory);

router.patch("/update",SubcategoryController.update);

export default router;


