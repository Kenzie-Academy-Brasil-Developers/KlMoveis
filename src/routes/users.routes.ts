import { Router } from "express";
import { validateBody, verifyAdmin, verifyPermissions } from "../middlewares/globals.middlewares";
import { verifyUniqueUserEmail } from "../middlewares/users.middlewares";
import { createUserController } from "../controllers/users.controller";
import { createUserSchema } from "../schemas/users.schema";

export const userRouter: Router = Router()

userRouter.post("/", validateBody(createUserSchema), verifyUniqueUserEmail, createUserController)
userRouter.get("/", verifyAdmin)
userRouter.patch("/:userId",verifyAdmin, verifyPermissions)
userRouter.delete("/:userId", verifyAdmin)