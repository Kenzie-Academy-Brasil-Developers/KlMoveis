import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import RealEstates from "./RealEstate.entity";

@Entity('categories')
 class Category{
    @PrimaryGeneratedColumn('increment')
    id: number 

    @Column({length: 45, unique: true})
    name: string

    @OneToMany(() => RealEstates, (realEstates) => realEstates.categories)
    realEstates: RealEstates[]
}

export default Category;