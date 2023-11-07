import { Router } from "express";
import { validateBody, verifyAdmin, verifyToken } from "../middlewares/globals.middlewares";
import { createNewScheduleSchema } from "../schemas/schedule.schema";
import { verifyRealEstateScheduleExists, verifyRealEstatesExists, verifyUserScheduleExists } from "../middlewares/schedules.middlewares";
import { createSchedulesController, readAllSchedulesRealEstateController } from "../controllers/schedules.controllers";

export const scheduleRouter: Router = Router()

scheduleRouter.post("/", verifyToken, validateBody(createNewScheduleSchema),verifyUserScheduleExists, verifyRealEstatesExists, verifyRealEstateScheduleExists,  createSchedulesController)
scheduleRouter.get("/realEstate/:id",verifyToken, verifyAdmin, readAllSchedulesRealEstateController)