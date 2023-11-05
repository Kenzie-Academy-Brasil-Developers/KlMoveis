import { Category, RealEstate } from "../entities";
import Address from "../entities/Address.entity";
import AppError from "../errors/AppErrors.error";
import { CreateRealEstate } from "../interfaces/realEstate.interface";
import { addressesRepo, categoriesRepo } from "../repositories";

export const createRealEstateService = async (data: CreateRealEstate): Promise<RealEstate> => {
  const categorie: Category | null = await categoriesRepo.findOneBy({ id: data.categoryId})

  if(!categorie) throw new AppError('Categorie not found', 404)

  const address: Address = await addressesRepo.save(data.address)
  const clinic: Clinic = await clinicRepo.save({...data, address, specialty: specialty!})

  return clinic
}

export const readClinicsService = async (): Promise<Clinic[]> => {
  return await clinicRepo.find({
    relations: {
      address: true
    }
  })
}