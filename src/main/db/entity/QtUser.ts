import { SystemColumn } from './SystemColumn'
import { Entity, Column } from 'typeorm'

@Entity('qt_user')
export class QtUser extends SystemColumn {
  @Column('varchar')
  'USR_NAME': string

  @Column('varchar')
  'USR_DESC': string

  @Column('varchar')
  'USR_ID': string

  @Column('varchar')
  'USR_PWD': string

  @Column('char')
  'USR_ADM_FLAG': string

  @Column('char')
  'AC_FLAG': string

  @Column('int')
  'PV_VERSION': number

  @Column('datetime')
  'PV_DATE': Date

  @Column('int')
  'PUB_VERSION': number

  @Column('datetime')
  'PUB_DATE': Date

  @Column('char')
  'USR_PW_INIT_FLAG': string

  @Column('char')
  'USR_LOCK_FLAG': string

  @Column('varchar')
  'USR_EXTERNAL_KEY': string

  @Column('varchar')
  'USR_EXTERNAL_ENTRY_PATH': string

  @Column('varchar')
  'USER_EMAIL_ADDR': string

  @Column('varchar')
  'USR_PHONE_NUMBER': string

  @Column('char')
  'USR_COUNTRY': string

  @Column('char')
  'USR_MFA_FLAG': string

  @Column('varchar')
  'USR_META_KEY': string

  @Column('varchar')
  'USR_STATUS': string
}
