import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

import { BaseRouter } from './baseRouter'

export class ComDeploy extends BaseRouter {
  constructor() {
    super({ url: '/comDeploy' })
    this.setMethod()
  }

  public setMethod() {
    // CALS Studio Deploy
    this.router.get('/studio/uploadUrl', async (req, res) => {
      const { sEnv, arrFileName } = req.query
      console.log(`[/studio/uploadUrl] params: sEnv: ${sEnv}, arrFileName: ${arrFileName}`)

      const uploadUrl = await this.getUploadUrl(sEnv as string, arrFileName as string[])

      res
        .status(200)
        .json({ uploadUrl })
    })

    // CALS Web Application Deploy
    this.router.post('/application', (req, res) => { })
  }

  private async getUploadUrl(sEnv: string, arrFileName: string[], sRegion: string = 'ap-northeast-2') {
    console.log(`[getUploadUrl] params: sEnv: ${sEnv}, arrFileName: ${arrFileName}, sRegion: ${sRegion}`)

    const arrUploadUrl: string[] = []
    const s3Client = new S3Client({ region: sRegion })

    for (let i = 0; i < arrFileName.length; i++) {
      const sFileName = arrFileName[i];
      const command = new PutObjectCommand({
        Bucket: sEnv !== 'prod' ? `${sEnv}.console.calsplatz.com` : 'console.calsplatz.com',
        Key: `${sFileName}`
      })

      const sUploadUrl = await getSignedUrl(s3Client, command, { expiresIn: 60 * 60 * 24 })
      arrUploadUrl.push(sUploadUrl)
    }

    return arrUploadUrl
  }
}