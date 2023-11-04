import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Schedules from "./schedules.entity";
import Addresses from "./addresses.entity";
import Categories from "./categories.entity";

@Entity('realEstates')
export default class RealEstate{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    sold: boolean

    @Column()
    value: number

    @Column()
    size: number

    
    @CreateDateColumn({ type: 'date' })
    createdAt: string
  
    @UpdateDateColumn({ type: 'date' })
    updatedAt: string

    @OneToMany(() => Schedules, (schedules) => schedules.realEstates)
    schedules: Schedules[]

    @OneToOne(() => Addresses, (addresses) => addresses.realEstates)
    @JoinColumn()
    addresses: Addresses

    @ManyToOne(() => Categories, (categories) => categories.realEstates)
    categories: Categories
}