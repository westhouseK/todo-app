import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Todo {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'text' })
  public text: string;

  @Column({ type: 'int' })
  public status: number;

  constructor(text: string, status: number) {
    this.text = text;
    this.status = status;
  }
}
