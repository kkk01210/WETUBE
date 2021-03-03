import express from "express";
import { deleteVideo, editVideo, upload, videoDetail, videos } from "../controllers/videoController";
import routes from "../routes";

const  videoRouter = express.Router();


videoRouter.get(routes.home, videos);
videoRouter.get(routes.join, upload);
videoRouter.get(routes.login, videoDetail);
videoRouter.get(routes.logout, editVideo);
videoRouter.get(routes.search, deleteVideo);



export default videoRouter;
