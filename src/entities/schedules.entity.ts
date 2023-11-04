import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./users.entity";
import realEstates from "./realEstates.entity";
import RealEstates from "./realEstates.entity";

@Entity('schedules')
export default class Schedule{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'date'})
    date: string

    @Column({type: 'time'})
    hour: string

    @Column()
    realEstateld: number

    @Column()
    userId: number

    @ManyToOne(() => User, (users) => users.schedules)
    user: User  

    @ManyToOne(() => RealEstates, (realEstates) => realEstates.schedules)
    realEstates: realEstates
}