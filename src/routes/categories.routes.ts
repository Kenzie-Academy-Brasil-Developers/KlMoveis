import { Router } from "express";
import { validateBody, verifyAdmin, verifyPermissions, verifyToken} from "../middlewares/globals.middlewares";
import { createCategoriesSchema } from "../schemas/categories.schema";
import { verifyCategoriesExists, verifyUniqueCategoriesName } from "../middlewares/categories.middlewares";
import { createCategoryController, readCategoryController, readRealEstatebyCategoryController } from "../controllers/category.controller";

export const categorieRouter: Router = Router()

categorieRouter.post("/",verifyToken , verifyPermissions, validateBody(createCategoriesSchema),verifyUniqueCategoriesName,  createCategoryController)
categorieRouter.get("/", readCategoryController)
categorieRouter.get("/:id/realEstate",verifyCategoriesExists,  readRealEstatebyCategoryController)