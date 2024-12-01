import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export abstract class SystemColumn {
  @PrimaryGeneratedColumn('uuid')
  'SYS_ID': string

  @Column('uuid')
  'SYS_CREATE_BY': string

  @Column('uuid')
  'SYS_MODIFY_BY': string

  @Column('datetime')
  'SYS_CREATE_DATE': Date

  @Column('datetime')
  'SYS_MODIFY_DATE': Date

  @Column('char')
  'SYS_FLAG': string

  @Column('varchar')
  'SYS_TYPE': string

  @Column('uuid')
  'FK_ACC_ID': string

  @Column('uuid')
  'TL_APL_ID': string

  @Column('uuid')
  'TL_ACC_ID': string
}
