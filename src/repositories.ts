import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";

import {Category, Address, User, RealEstate, Schedule} from "./entities"
export const categoriesRepo: Repository<Category> = AppDataSource.getRepository(Category)
export const addressesRepo: Repository<Address> = AppDataSource.getRepository(Address)
export const userRepo: Repository<User> = AppDataSource.getRepository(User)
export const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
export const scheduleRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule)