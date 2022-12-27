import { Column, PrimaryGeneratedColumn, BeforeUpdate } from 'typeorm'

export class Common {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  public id: number

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'ts_created',
  })
  public tsCreated: Date

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'ts_updated',
  })
  public tsUpdated: Date

  @BeforeUpdate()
  addLastModified() {
    this.tsUpdated = new Date()
  }
}
