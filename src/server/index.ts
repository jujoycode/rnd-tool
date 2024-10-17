import express from 'express'
import { ComLogin } from './routes/comLogin';
import { ComDeploy } from './routes/comDeploy';

import type { AppConfig, AppRouter } from 'interface/server.interface';

class App {
  private app: express.Application;
  private port: number;

  constructor(appConfig: AppConfig) {
    this.app = express();
    this.port = appConfig.port;

    this.applyMiddlewares(appConfig.middlewares);
    this.applyRoutes(appConfig.routes);
  }

  /**
   * applyMiddlewares
   * @param middlewares 
   */
  private applyMiddlewares(middlewares: any) {
    middlewares.forEach((middleware: any) => {
      console.log(`🛠  Set Middleware: ${middleware.name}`)
      this.app.use(middleware);
    })
  }

  /**
   * applyRoutes
   * @param routes
   */
  private applyRoutes(routes: AppRouter[]) {
    routes.forEach(route => {
      console.log(`📡 Set Router: ${route.routeUrl}`)
      this.app.use(route.routeUrl, route.router);
    })
  }

  /**
   * listen
   * @desc server 실행
   */
  public listen() {
    this.app.get('/', (req, res) => {
      res.send('R&D Tool Server')
    })

    this.app.listen(this.port, () => {
      console.log(`🔥 Server started on ${this.port} 🔥`);
    })
  }
}

// ------------------------------------------------------

new App(
  {
    port: 5001,
    routes: [
      new ComLogin(),
      new ComDeploy()
    ],
    middlewares: [
      // cors(corsConfig),
      express.json(),
      express.urlencoded({ extended: false }),
    ]
  }
).listen()

// ------------------------------------------------------
