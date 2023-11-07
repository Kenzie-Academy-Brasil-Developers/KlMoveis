import { Category, RealEstate } from "../entities";
import Address from "../entities/Address.entity";
import AppError from "../errors/AppErrors.error";
import { CreateRealEstate } from "../interfaces/realEstate.interface";
import { addressesRepo, categoriesRepo, realEstateRepo } from "../repositories";


export const createRealEstateService = async (data: CreateRealEstate): Promise<RealEstate> => {
  const category: Category | null = await categoriesRepo.findOneBy({ id: data.categoryId})

  if(!category) throw new AppError("category not found", 404)


  const address: Address = await addressesRepo.save(data.address)
  const realEstate: RealEstate = await realEstateRepo.save(realEstateRepo.create({...data, address, category: category!}))


  return realEstate
}


export const readRealEstateService = async (): Promise<RealEstate[]> => {
  return await realEstateRepo.find({
    relations: {
      address: true
    }
  })
}