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

    console.log(`🛠  Middleware Setting 🛠`)
    this.applyMiddlewares(appConfig.middlewares);

    console.log(`\n📡 Router Setting 📡`)
    this.applyRoutes(appConfig.routes);
  }

  /**
   * applyMiddlewares
   * @param middlewares 
   */
  private applyMiddlewares(middlewares: any) {
    middlewares.forEach((middleware: any) => {
      console.log(`→ ${middleware.name}`)
      this.app.use(middleware);
    })
  }

  /**
   * applyRoutes
   * @param routes
   */
  private applyRoutes(routes: AppRouter[]) {
    routes.forEach(route => {
      console.log(`→ ${route.routeUrl}`)
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
      console.log(`\n🔥 Server started on http://localhost:${this.port} 🔥\n`);
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
