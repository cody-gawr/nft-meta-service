import { Router } from "express";
import * as multer from "multer";
import * as path from "path";

import HomeController from "../controllers/Api/Home";
import MetadataController from "../controllers/Api/Metadata";

const router = Router();
const storage = multer.diskStorage({
  destination: (_, file, cb) => {
    cb(null, path.join(__dirname, "../../public/storage"));
  },
  filename: (_, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});
const jsonFileFilter = (_, file, cb) => {
  if (file.mimetype === "application/json") {
    cb(null, true);
  } else {
    cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"));
  }
};

const upload = multer({ storage, fileFilter: jsonFileFilter });

router.get("/", HomeController.index);
router.post("/upload", upload.single("metadata"), MetadataController.upload);
router.get("/metadata/:tokenId([0-9]+)", MetadataController.getByTokenId);

export default router;
