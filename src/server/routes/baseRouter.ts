import { Router } from 'express'

export abstract class BaseRouter {
  public routeUrl: string
  public router: Router

  constructor(config: { url: string }) {
    this.routeUrl = config.url
    this.router = Router()
  }

  abstract setMethod(): void
}