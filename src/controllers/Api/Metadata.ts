import { NextFunction, Request, Response } from "express";

class Metadata {
  public static upload(req: Request, res: Response, _: NextFunction): Response {
    return res.json({
      message: "Hit the upload endpoint",
    });
  }
}

export default Metadata;
