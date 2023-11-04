import { Router } from "express";
import { userRouter } from "./users.routes";
import { scheduleRouter } from "./schedule.routes";
import { realEstateRouter } from "./realEstate.routes";
import { categorieRouter } from "./categories.routes";
import { loginRouter } from "./login.routes";

export const routes: Router = Router()
routes.use("/users", userRouter)
routes.use("/schedules", scheduleRouter)
routes.use("/realEstate", realEstateRouter)
routes.use("/categories", categorieRouter)
routes.use("/login", loginRouter)