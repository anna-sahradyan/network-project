import {Router} from "express";
import {getMe, register,login} from "../controllers/auth-controller.js";

const router = new Router();
router.post(`/register`, register);
// router.post(`/login`, login);
// router.get(`/me`, getMe());
export default router;