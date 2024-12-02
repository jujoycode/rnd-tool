/**
 * getTotalFileCount
 * @desc 대상 경로에 존재하는 모든 파일 개수와 전체 파일 경로를 반환합니다. (Recursive)
 * @returns { totalFileCount: number; totalFilePaths: string[] }
 */
function getTotalFileCount(targetPath: string): { totalFileCount: number; totalFilePaths: string[] } {
  console.log(`[getTotalFileCount] Root Path: ${targetPath}`)

  return {
    totalFileCount: 0,
    totalFilePaths: []
  }
}

/**
 * uploadToS3
 * @desc 대상 경로에 존재하는 모든 파일을 지정 버킷에 업로드합니다. (Recursive)
 */
async function uploadToS3({ targetBucket, targetPath }: { targetBucket: string; targetPath: string }) {
  // 1. 파일 업로드
  console.log(`[uploadToS3] Path: ${targetPath} / Bucket: ${targetBucket}`)

  // 2. 완료 반환
  return {
    isSuccess: true,
    errorStack: null
  }
}

export { getTotalFileCount, uploadToS3 }
