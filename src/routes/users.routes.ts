import { Router } from "express";
import { validateBody, verifyAdmin, verifyPermissions } from "../middlewares/globals.middlewares";

export const userRouter: Router = Router()

userRouter.post("/",)
userRouter.get("/", verifyAdmin)
userRouter.patch("/:userId",verifyAdmin, verifyPermissions)
userRouter.delete("/:userId", verifyAdmin)