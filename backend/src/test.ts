import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class Customer {
  @PrimaryColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 10 })
  public name: string;

  @Column({ type: 'int' })
  public age;

  constructor(name: string) {
    this.name = name;
  }
}
