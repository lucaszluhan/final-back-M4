import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import IUsers from '../../../features/users/interface/UsersInterface';
import Notes from './Notes';

@Entity({ name: 'users', schema: 'trabalho_final_m4' })
export default class Users implements IUsers {
   @PrimaryColumn({
      type: 'uuid',
   })
   uid: string;

   @Column()
   name: string;

   @Column()
   password: string;

   @Column({
      nullable: false,
   })
   notes_numb: number;

   @CreateDateColumn()
   created_at: Date;

   @OneToMany(() => Notes, (note) => note.user_uid)
   notes: Notes[];
}
