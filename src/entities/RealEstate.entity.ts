import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Schedules from "./Schedule.entity";
import Addresses from "./Address.entity";
import Categories from "./Category.entity";

@Entity('realEstates')
 class RealEstate{
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

export default RealEstate;