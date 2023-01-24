import {Router} from "express";
import {getMe, register,login} from "../controllers/auth-controller.js";
import checkAuth  from "../middleware/checkAuth.js";

const router = new Router();
router.post(`/register`, register);
 router.post(`/login`, login);
router.get(`/me`,checkAuth, getMe);
export default router;