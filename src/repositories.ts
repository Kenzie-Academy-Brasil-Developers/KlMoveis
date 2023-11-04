import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import Category from "./entities/categories.entity";
import Address from "./entities/addresses.entity";
import User from "./entities/users.entity";
import RealEstate from "./entities/realEstates.entity";
import Schedule from "./entities/schedules.entity";

export const categoriesRepo: Repository<Category> = AppDataSource.getRepository(Category)
export const addressesRepo: Repository<Address> = AppDataSource.getRepository(Address)
export const userRepo: Repository<User> = AppDataSource.getRepository(User)
export const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
export const scheduleRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule)