import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Test {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 10 })
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
