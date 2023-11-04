import { Router } from "express";
import { verifyAdmin, verifyToken } from "../middlewares/globals.middlewares";

export const scheduleRouter: Router = Router()

scheduleRouter.post("/", verifyToken)
scheduleRouter.get("/realEstate/:id", verifyAdmin)