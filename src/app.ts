import * as express from "express"
import { RequestHandler } from "express-serve-static-core";

class App {
  // tslint:disable-next-line
  public express;

  constructor () {
    this.express = this.express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = this.express.Router()
    // tslint:disable-next-line
    router.get("/", (req: RequestHandler, res) => {
      res.json({
        message: "Mr Hammond, the phones are working."
      });
    })
    this.express.use("/", router);
  }
}

export default new App().express