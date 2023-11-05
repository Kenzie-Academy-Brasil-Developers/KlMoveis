import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import Category from "./entities/Category.entity";
import Address from "./entities/Address.entity";
import User from "./entities/User.entity";
import RealEstate from "./entities/RealEstate.entity";
import Schedule from "./entities/Schedule.entity";

export const categoriesRepo: Repository<Category> = AppDataSource.getRepository(Category)
export const addressesRepo: Repository<Address> = AppDataSource.getRepository(Address)
export const userRepo: Repository<User> = AppDataSource.getRepository(User)
export const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
export const scheduleRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule)