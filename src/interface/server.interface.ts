import type { Router } from "express"

export interface AppConfig {
  port: number,
  middlewares: Array<any>,
  routes: Array<AppRouter>
}

export interface AppRouter {
  routeUrl: string,
  router: Router
} 