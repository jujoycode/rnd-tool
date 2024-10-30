import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

import { BaseRouter } from './baseRouter'

import { Request, Response } from 'interface/server.interface'

export class ComDeploy extends BaseRouter {
  constructor() {
    super({ url: '/comDeploy' })
    this.setMethod()
  }

  public setMethod() {
    // --------------------------------------------------------------------
    // [CALS Studio]
    // --------------------------------------------------------------------
    // 1. [S3] CALS Studio Backup
    this.router.patch('/studio/backup', async (req: Request, res: Response) => {
      const sBackupPath = `backup_${Date.now()}`
    })

    // 2. [S3] CALS Studio Deploy
    this.router.get('/studio/getUploadUrl', async (req: Request, res: Response) => {
      const { sEnv, arrFileName } = req.query
      console.log(`[/studio/getUploadUrl][params]: sEnv: ${sEnv} / arrFileName: ${arrFileName}`)

      const uploadUrl = await this.getUploadUrl(sEnv as string, arrFileName as string)

      res.status(200).json({ uploadUrl })
    })

    // 3. [CloudFront] CALS Studio Invalidations

    // --------------------------------------------------------------------

    // --------------------------------------------------------------------
    // [CALS Web Application]
    // --------------------------------------------------------------------
    // 1. [S3] CALS Web Application Deploy
    // 2. [S3] CALS Web Application Deploy

    // 3. [CloudFront] CALS Web Application Invalidations
    // --------------------------------------------------------------------

    this.router.post('/lambdaMap/upload', async (req: Request, res: Response) => {
      console.log(req.body)

      const response = await this.putLambdaMaponDynamoDb()
      res.status(200).json({ response })
    })
  }

  /**
   * getUploadUrl
   * @desc 요청받은 파일마다 preSignedUrl 생성
   * @param sEnv 대상 AWS 환경 (dev, app, sandbox, prod)
   * @param sFileName 업로드할 파일명 ("file1, file2, file3")
   * @param sRegion 대상 AWS 리전 (default: ap-northeast-2)
   */
  private async getUploadUrl(sEnv: string, sFileName: string, sRegion: string = 'ap-northeast-2') {
    const arrUploadUrl: string[] = []
    const s3Client = new S3Client({ region: sRegion })

    const arrFileName = sFileName.split(',')

    for (let i = 0; i < arrFileName.length; i++) {
      const sFileName = arrFileName[i]
      const command = new PutObjectCommand({
        Bucket: sEnv !== 'prod' ? `${sEnv}.console.calsplatz.com` : 'console.calsplatz.com',
        Key: sFileName
      })

      const sUploadUrl = await getSignedUrl(s3Client, command, { expiresIn: 60 * 60 * 24 })
      arrUploadUrl.push(sUploadUrl)
    }

    return arrUploadUrl
  }

  private async putLambdaMaponDynamoDb() {
    const client = new DynamoDBClient({});
    const docClient = DynamoDBDocumentClient.from(client);

    const command = new PutCommand({
      TableName: "Cals-Master-Data",
      Item: {
        PK: "CODE",           // 파티션 키
        SK: "APPLICATION_BASE", // 정렬 키
        CODE_SUB_TYPE: "APPLICATION_BASE",
        UPDATED_AT: new Date().toISOString(),
      },
    });

    const response = await docClient.send(command);
    console.log(response);
    return response;
  }
}