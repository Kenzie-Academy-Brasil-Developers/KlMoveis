import { NextFunction, Request, Response } from "express";
import { categoriesRepo } from "../repositories";
import AppError from "../errors/AppErrors.error";
import Category from "../entities/Category.entity";

const verifyUniqueCategoriesName = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    const {name} = req.body
    const categories: Category | null = await categoriesRepo.findOneBy({name})
    console.log(categories)
    if(categories) throw new AppError('Category already exists', 409)

    return next()
}

const verifyCategoriesExists = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    const {id} = req.params
    const categories: Category | null = await categoriesRepo.findOneBy({id: Number(id)})


    if(!categories) throw new AppError('Category not found', 404)
    return next()
}


export {verifyUniqueCategoriesName, verifyCategoriesExists};