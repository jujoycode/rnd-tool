import { getTotalFileCount, uploadToS3 } from '../api'
import type { IpcMainInvokeEvent } from 'electron'

/**
 * handleS3Upload
 * @desc 대상 경로에 존재하는 모든 파일을 지정 버킷에 업로드 (Recursive)
 */
export async function handleS3Upload(event: IpcMainInvokeEvent, args: { targetBucket: string; targetPath: string }) {
  // 1. 대상 경로 내 전체 파일 개수 확인
  const { totalFileCount, totalFilePaths } = getTotalFileCount(args.targetPath)

  // 2. 총 파일 개수 전달 및 시작 알림
  event.sender.send('start-uploadToS3', { totalFileCount })

  // 3. upload 시작
  for (let i = 0; i < totalFilePaths.length; i++) {
    const filePath = totalFilePaths[i]

    // 3.1 업로드
    await uploadToS3({ targetBucket: args.targetBucket, targetPath: filePath }).then(({ isSuccess, errorStack }) => {
      // 3.1.1 실패 시 에러 알림
      if (!isSuccess) {
        event.sender.send('error-uploadToS3', { errorStack })
      }

      // 3.1.2 성공 시 진행 알림
      event.sender.send('progress-uploadToS3')
    })
  }

  // 4. 완료 알림
  event.sender.send('finish-uploadToS3')
}
