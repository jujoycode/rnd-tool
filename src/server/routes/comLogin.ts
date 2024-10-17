import { BaseRouter } from './baseRouter'

export class ComLogin extends BaseRouter {
  constructor() {
    super({ url: '/comLogin' })
    this.setMethod()
  }

  public setMethod() {
    this.router.post('/', (req, res) => {
      res.status(200).send('POST: /comLogin');
    })
  }
}