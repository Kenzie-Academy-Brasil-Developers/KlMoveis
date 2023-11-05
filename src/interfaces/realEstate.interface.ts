import { z } from "zod";
import { Repository } from "typeorm";
import { createRealEstateSchema } from "../schemas/realEstate.schema";
import RealEstate from "../entities/RealEstate.entity";
import Address from "../entities/Address.entity";

export type CreateRealEstate = z.infer<typeof createRealEstateSchema>

export type realEstateRepo = Repository<RealEstate>
export type AddressRepo = Repository<Address>