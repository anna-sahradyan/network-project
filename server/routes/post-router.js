import {Router} from "express";
import {checkAuth} from "../middleware/checkAuth.js";
import  {create} from "../controllers/post-controller.js";

const router = new Router();
router.post(`/`, checkAuth, create);
export default router;