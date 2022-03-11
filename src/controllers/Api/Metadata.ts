import { NextFunction, Request, Response } from "express";

class Metadata {
  public static upload(_: Request, res: Response, __: NextFunction): Response {
    return res.json({
      message: "file uploaded",
    });
  }
}

export default Metadata;
