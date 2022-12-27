import { Common } from '../../../common/common.entity'
import { Column, Entity } from 'typeorm'

export enum LogType {
  FETCH_USER = 'fetch user',
  FETCH_REPOS = 'fetch repos',
}

@Entity('logs')
export class Log extends Common {
  @Column('varchar', { nullable: true, name: 'type' })
  public type: string

  @Column('int', { nullable: true, name: 'user_id' })
  public userId: number

  @Column('json', { nullable: true, name: 'data' })
  public data: string
}
