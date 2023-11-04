import { NextFunction, Request, Response } from "express";
import RealEstate from "../entities/realEstates.entity";
import { realEstateRepo, scheduleRepo } from "../repositories";
import AppError from "../errors/AppErrors.error";
import Schedule from "../entities/schedules.entity";
import { number } from "zod";

export const verifyRealEstatesExists = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    const {realEstateld} = req.body
    const realEstate: RealEstate | null = await realEstateRepo.findOne({
        where: {
            id: Number(realEstateld)
        }
    })
    if(!realEstate) throw new AppError('RealEstate not found', 404)

    return next()
}

export const verifyRealEstateScheduleExists =  async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    const {realEstateld, hour, date} = req.body
    const schedules: Schedule | null  = await scheduleRepo.findOne({
        where: {
            realEstates: {
                id: Number(realEstateld)
            }, 
            hour,
            date
        }
    })
    if(schedules) throw new AppError('Schedules nao existe', 409)
    return next()
}

export const verifyUserScheduleExists = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    let {sub} = res.locals.decoded 
    sub = Number(sub)
    const {hour, date} = req.body
    const schedule: Schedule | null =  await scheduleRepo.findOne({
        where: {
            user: {
                id: sub
            },
            date,
            hour
        },
    })

    if(schedule) throw new AppError('mensagem de erro schedules', 409)

    return next()
}