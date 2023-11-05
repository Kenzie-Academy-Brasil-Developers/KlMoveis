import { z } from "zod";
import { Repository } from "typeorm";
import Category from "../entities/Category.entity";
import { createCategoriesSchema, readAllCategoriesSchema } from "../schemas/categories.schema";

export type CreateCategories = z.infer<typeof createCategoriesSchema>
export type ReadAllCategories = z.infer<typeof readAllCategoriesSchema>
export type CategoriesRepo = Repository<Category>