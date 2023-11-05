import { z } from "zod";
import { Repository } from "typeorm";
import { createNewScheduleSchema } from "../schemas/schedule.schema";
import Schedule from "../entities/Schedule.entity";

export type CreateSchedule = z.infer<typeof createNewScheduleSchema>

export type ScheduleRepo = Repository<Schedule>