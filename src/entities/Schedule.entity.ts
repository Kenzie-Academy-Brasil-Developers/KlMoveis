import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./User.entity";
import realEstates from "./RealEstate.entity";
import RealEstates from "./RealEstate.entity";

@Entity('schedules')
 class Schedule{
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

export default Schedule;