import { NextFunction, raw, Request, Response } from "express";
import * as fs from "fs";
import * as path from "path";
import { StringDecoder } from "string_decoder";

class Metadata {
  public static upload(_: Request, res: Response, __: NextFunction): Response {
    return res.json({
      message: "file uploaded",
    });
  }

  public static getByTokenId(
    req: Request,
    res: Response,
    _: NextFunction
  ): Response {
    const decoder = new StringDecoder("utf-8");
    const { tokenId } = req.params;
    const jsonFilePath = path.resolve(
      __dirname,
      `../../../public/storage/${tokenId}.json`
    );
    const rawData = fs.readFileSync(jsonFilePath);
    return res.json({
      message: JSON.parse(decoder.write(rawData)),
    });
  }
}

export default Metadata;
