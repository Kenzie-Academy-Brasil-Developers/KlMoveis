import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Schedules from "./schedules.entity";

@Entity('users')
export default class User{
    @PrimaryGeneratedColumn('increment')
    id: Number

    @Column({length: 45})
    name: string

    @Column({ length: 45, unique: true })
    email: string

    @Column({ default: false })
    admin: boolean

    @Column({ length: 120 })
    password: string 

    @CreateDateColumn({ type: 'date' })
    createdAt: string
  
    @UpdateDateColumn({ type: 'date' })
    updatedAt: string
  
    @DeleteDateColumn({ type: 'date', nullable: true })
    deletedAt: string | null

    @ManyToOne(() =>  Schedules, (schedules => schedules.user))
    schedules: Schedules[]

    
}