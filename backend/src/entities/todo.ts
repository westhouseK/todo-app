import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Todo {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'int' })
  public status: string;

  @Column({ type: 'text' })
  public text: string;
}
