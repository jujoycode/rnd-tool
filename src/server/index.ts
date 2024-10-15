import express from 'express'

interface AppConfig {
  port: number,
  middlewares: Array<any>,
  routes: Array<any>
}

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
      this.app.use(middleware);
    })
  }

  /**
   * applyRoutes
   * @param routes
   */
  private applyRoutes(routes: any) {
    routes.forEach((route: any) => {
      this.app.use(route.url, route.controller);
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
    ],
    middlewares: [
      // cors(corsConfig),
      express.json(),
      express.urlencoded({ extended: false }),
    ]
  }
).listen()

// ------------------------------------------------------
