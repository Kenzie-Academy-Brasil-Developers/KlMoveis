import { Category } from "../entities";
import AppError from "../errors/AppErrors.error";
import { CreateCategories, ReadAllCategories } from "../interfaces/categories.interface";
import { categoriesRepo } from "../repositories";


export const createCategoryService = async(data: CreateCategories):Promise<Category> => {
    return await categoriesRepo.save(data)
}


export const readCategoriesService = async(): Promise<ReadAllCategories> => {
    return await categoriesRepo.find()
}


export const readRealEstateCategoryService = async (id: number): Promise<Category> => {
    const category: Category | null = await categoriesRepo.findOne({
      where: {
        id
      },
      relations: {
        realEstate: true
      }
    })
  
    if(!category) throw new AppError("Category not found", 404)
  

    return category
}