import { Router } from "express";
import * as multer from "multer";
import * as path from "path";

import HomeController from "../controllers/Api/Home";
import MetadataController from "../controllers/Api/Metadata";

const router = Router();
const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, path.join(__dirname, "../../public/storage"));
  },
  filename: (_, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage });

router.get("/", HomeController.index);
router.post("/upload", upload.single("metadata"), MetadataController.upload);

export default router;
