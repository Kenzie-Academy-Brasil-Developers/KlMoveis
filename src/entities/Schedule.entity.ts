import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./User.entity";
import RealEstates from "./RealEstate.entity";
import RealEstate from "./RealEstate.entity";

@Entity('schedules')
 class Schedule{
    @PrimaryGeneratedColumn('increment')
    id: number


    @Column({type: 'date'})
    date: string


    @Column({type: 'time'})
    hour: string


    @ManyToOne(() => User, (user) => user.schedule)
    user: User  


    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate
}


export default Schedule;