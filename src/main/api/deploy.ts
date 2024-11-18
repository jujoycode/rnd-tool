import path from 'path'
import { readdir, stat, readFile } from "fs/promises"
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

export class S3Uploader {
  private s3: S3Client

  constructor(region?: string) {
    this.s3 = new S3Client({ region: region ?? 'ap-northeast-2' })
  }

  public async recursiveS3Upload(targetPath: string) {
    let totalFiles = 0
    const targetFileList = await readdir(targetPath)

    for (const file of targetFileList) {
      const fullPath = path.join(targetPath, file)
      totalFiles += await this.processPath(fullPath, file)
    }

    console.log(`총 파일 개수: ${totalFiles}개`)
  }

  private async processPath(fullPath: string, relativePath: string): Promise<number> {
    const stats = await stat(fullPath)

    if (stats.isDirectory()) {
      const files = await readdir(fullPath)
      let count = 0
      for (const file of files) {
        count += await this.processPath(
          path.join(fullPath, file),
          path.join(relativePath, file)
        )
      }
      return count
    } else {
      // await this.uploadFile(fullPath, relativePath)
      console.log(`파일 업로드: ${relativePath}`)

      return 1
    }
  }


  private async uploadFile(fullPath: string, filePath: string) {
    const command = new PutObjectCommand({
      Bucket: 'dev.repo.calsplatz.com',
      Key: path.join('rndqa/testNew', filePath),
      Body: await readFile(fullPath),
    })

    await this.s3.send(command)
  }
}