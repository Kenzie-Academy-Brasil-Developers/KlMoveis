import { Router } from "express";
import { validateBody, verifyAdmin, verifyPermissions, verifyToken } from "../middlewares/globals.middlewares";
import { verifyUniqueUserEmail, verifyUserExists} from "../middlewares/users.middlewares";
import { createUserController, deleteUserController,  readAllUsersController, updateUserController } from "../controllers/users.controller";
import { createUserSchema, updateUserSchema } from "../schemas/users.schema";

export const userRouter: Router = Router()

userRouter.post("/", validateBody(createUserSchema), verifyUniqueUserEmail, createUserController)
userRouter.get('/', verifyToken, verifyAdmin, readAllUsersController)
userRouter.patch('/:id',verifyToken, validateBody(updateUserSchema),  verifyUserExists, verifyPermissions, updateUserController)
userRouter.delete('/:id', verifyToken, verifyUserExists, verifyPermissions,  deleteUserController)