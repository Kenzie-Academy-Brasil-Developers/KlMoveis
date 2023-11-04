import { NextFunction, Request, Response } from "express";
import Address from "../entities/addresses.entity";
import { addressesRepo } from "../repositories";
import AppError from "../errors/AppErrors.error";
export const verifyAddressExists = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    const { addresses } = req.body
    const addressExists: Address | null = await addressesRepo.findOne({
        where: {
            street: addresses.street,
            zipCode: addresses.zipCode,
            number: addresses.number,
            city: addresses.city,
            state: addresses.state,
        }
    })
    if(addressExists) throw new AppError('Address already exists', 409)

    return next()
}