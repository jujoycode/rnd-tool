import { v4 as uuidv4 } from 'uuid'

export class ProjectUtil {
  /**
   * 현재 시간을 'YYYY-MM-DD HH:mm:ss' 형식으로 반환
   */
  static getCurrentTime(): string {
    const date = new Date()

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')

    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`
  }

  /**
   * UUID 반환
   */
  static getUUID(): string {
    return uuidv4().replace(/-/g, '')
  }
}