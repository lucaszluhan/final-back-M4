import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import INotes from '../../../features/notes/interface/notesInterface';
import Users from './Users';

@Entity({ name: 'notes', schema: 'trabalho_final_m4' })
export default class Notes implements INotes {
   @PrimaryColumn({
      type: 'uuid',
   })
   uid: string;

   @Column()
   note_numb: number;

   @Column({
      length: 50,
   })
   description: string;

   @Column({
      length: 500,
   })
   detail: string;

   @ManyToOne(() => Users, (user) => user.uid, {
      // eager: true,
   })
   user_uid: string;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;
}
