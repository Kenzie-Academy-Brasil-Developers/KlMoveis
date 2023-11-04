import { NextFunction, Request, Response } from "express";
import { categoriesRepo } from "../repositories";
import AppError from "../errors/AppErrors.error";
import Category from "../entities/categories.entity";

const verifyUniqueCategoriesName = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    const {name} = req.body
    const categories: Category | null = await categoriesRepo.findOneBy(name)

    if(categories) throw new AppError('Categorie already exists', 409)

    return next()
}

const verifyCategoriesExists = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    const {id} = req.body
    const categories: Category | null = await categoriesRepo.findOneBy({id: Number(id)})

    if(!categories) throw new AppError('Categorie not found', 404)

    return next()
}