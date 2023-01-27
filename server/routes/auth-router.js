import {Router} from "express";
import {getMe, register,login} from "../controllers/auth-controller.js";
import {checkAuth} from "../middleware/checkAuth.js";
import {loginValidator, registerValidator} from "../validation/index.js";
import handleValidationErrors from "../validation/handleValidationErrors.js";

const router = new Router();
router.post(`/register`,registerValidator,handleValidationErrors, register);
router.post(`/login`,loginValidator,handleValidationErrors, login);
router.get(`/me`,checkAuth, getMe);
export default router;