import { NextFunction, Request, Response } from "express";
import Locals from "../../providers/Locals";

class Home {
  public static index(_: Request, res: Response, __: NextFunction): any {
    console.log("aaa");
    return res.json({
      message: Locals.config().name,
    });
  }
}

export default Home;
