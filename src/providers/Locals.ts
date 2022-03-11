import { Application } from "express";
import * as path from "path";
import * as dotenv from "dotenv";
import { IConfiguration } from "../interfaces/providers/configuration";

class Locals {
  /**
   * Makes env configs available for your app
   * throughout the app's runtime
   */

  public static config(): IConfiguration {
    dotenv.config({ path: path.join(__dirname, "../../.env") });
    const port = parseInt(process.env.PORT) || 4040;
    const url = process.env.APP_URL || `http://localhost:${port}`;
    const isCORSEnabled = /true/i.test(process.env.CORS_ENABLED) || true;
    const apiPrefix = process.env.API_PREFIX || "api";
    const name = process.env.APP_NAME || "7 Figure NFT Metadata Service";
    const maxUploadLimit = process.env.APP_MAX_UPLOAD_LIMIT || "50mb";
    const maxParameterLimit =
      parseInt(process.env.APP_MAX_PARAMETER_LIMIT) || 50;

    return {
      apiPrefix,
      isCORSEnabled,
      maxUploadLimit,
      maxParameterLimit,
      name,
      port,
      url,
    };
  }

  /**
   * Injects your config to the app's locals
   */
  public static init(_express: Application): Application {
    _express.locals.app = this.config();
    return _express;
  }
}

export default Locals;
