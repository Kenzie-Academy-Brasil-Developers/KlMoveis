import { Router } from "express";
import { verifyAdmin} from "../middlewares/globals.middlewares";

export const categorieRouter: Router = Router()

categorieRouter.post("/", verifyAdmin)
categorieRouter.get("/", )
categorieRouter.get("/:id/realEstate", )