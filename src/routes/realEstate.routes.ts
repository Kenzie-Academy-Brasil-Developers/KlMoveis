import { Router } from "express";
import { validateBody, verifyAdmin, verifyPermissions, verifyToken } from "../middlewares/globals.middlewares";
import { createRealEstateSchema } from "../schemas/realEstate.schema";
import { verifyAddressExists } from "../middlewares/realEstates.middlewares";
import { createRealEstateController, readAllRealEstateController } from "../controllers/realEstate.controller";

export const realEstateRouter: Router = Router()

realEstateRouter.post("/", verifyToken ,verifyAdmin, validateBody(createRealEstateSchema),  verifyAddressExists,    createRealEstateController )
realEstateRouter.get("/", readAllRealEstateController)
