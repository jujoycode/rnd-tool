import dotenv from 'dotenv'
dotenv.config()

interface GetDefaultEnvOptions {
  key: string
  isNumber?: boolean
}

interface GetEnvOptions extends GetDefaultEnvOptions {
  calsEnv?: string
}

/**
 * CALS_ENV
 * @desc calsEnv 키 값
 */
const CALS_ENV = {
  local: 'LOCAL',
  dev: 'CD',
  app: 'CA',
  sandbox: 'CPD',
  prod: ''
}

/**
 * convertCalsEnv
 * @desc calsEnv를 환경 변수 키로 변환
 */
function convertCalsEnv(calsEnv: string) {
  return CALS_ENV[calsEnv.toLowerCase() as keyof typeof CALS_ENV]
}

/**
 * getDefaultEnv
 * @desc 기본 환경 변수를 반환
 */
export function getDefaultEnv(options: GetDefaultEnvOptions & { isNumber: true }): number
export function getDefaultEnv(options: GetDefaultEnvOptions & { isNumber?: false | undefined }): string
export function getDefaultEnv(options: GetDefaultEnvOptions): string | number {
  const value = process.env[options.key]
  if (!value) throw new Error(`[getEnv] ${options.key} is not defined`)

  return value
}

/**
 * getEnv
 * @desc calsEnv에 따라 환경 변수를 반환
 */
export function getEnv(options: GetEnvOptions & { isNumber: true }): number
export function getEnv(options: GetEnvOptions & { isNumber?: false | undefined }): string
export function getEnv(options: GetEnvOptions): string | number {
  // if (process.env.NODE_ENV !== 'production') {
  //   options.calsEnv = 'local'
  // }

  const value = process.env[`${convertCalsEnv(options.calsEnv ?? 'dev')}_${options.key}`]
  if (!value) throw new Error(`[getEnv] ${options.key}(${options.calsEnv}) is not defined`)

  if (options.isNumber) return Number(value)
  return value
}
