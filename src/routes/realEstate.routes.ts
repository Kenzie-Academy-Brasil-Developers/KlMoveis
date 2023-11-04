import { Router } from "express";
import { verifyAdmin } from "../middlewares/globals.middlewares";

export const realEstateRouter: Router = Router()

realEstateRouter.post("/", verifyAdmin)
realEstateRouter.get("/", )
