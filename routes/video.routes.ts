import express from "express";
import VideoController from "../controllers/video.controller";

const router = express.Router();

router.get("/", VideoController.getVideos);
router.get("/:id", VideoController.getOneVideo);
router.post("/", VideoController.createVideo);
router.put("/:id", VideoController.updateVideo);
router.delete("/:id", VideoController.deleteVideo);

export default router;
