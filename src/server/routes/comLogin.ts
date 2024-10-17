import { BaseRouter } from './baseRouter'

export class ComLogin extends BaseRouter {
  constructor() {
    super({ url: '/comLogin' })  // 슬래시를 추가합니다.
    this.setMethod()
  }

  public setMethod() {
    this.router.post('/', (req, res) => {
      res.status(200).send('POST: /comLogin');
    })
  }
}