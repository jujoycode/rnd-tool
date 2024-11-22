import { formatDistanceToNow } from 'date-fns'

export class CommonUtil {
  /**
   * getRelativeTime
   * @param date 기준 날짜 (include time)
   * @returns 상대 시간 (ex. 2 days)
   */
  static getRelativeTime(date: Date): string {
    return formatDistanceToNow(date)
  }
}
