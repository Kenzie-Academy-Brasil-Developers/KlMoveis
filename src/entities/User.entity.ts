import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity,  ManyToOne,  PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Schedules from "./Schedule.entity";
import { getRounds, hashSync } from "bcryptjs";

@Entity('users')
 class User{
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

    @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const hasRounds: number = getRounds(this.password)

    if(!hasRounds) {
      this.password = hashSync(this.password, 10)
    }
  }
    
}

export default User;