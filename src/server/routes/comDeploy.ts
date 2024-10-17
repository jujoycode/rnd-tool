import { BaseRouter } from './baseRouter'

export class ComDeploy extends BaseRouter {
  constructor() {
    super({ url: '/comDeploy' })
    this.setMethod()
  }

  public setMethod() {
    // CALS Studio Deploy
    this.router.post('/studio', (req, res) => { })

    // CALS Web Application Deploy
    this.router.post('/application', (req, res) => { })
  }
}