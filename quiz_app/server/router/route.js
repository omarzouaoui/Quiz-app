import { Router } from "express";
const router = Router();

/**import controllers*/
import * as controller from "../controllers/controller.js"

/**Questions Route */

router.route("/questions")
.get(controller.getQuestion) /**GET req*/
.post(controller.insertQuestions) /**POST req*/
.delete(controller.dropQuestions) /**DELETE req*/

router.route("/result")
.get(controller.getResult)
.post(controller.storeResult)
.delete(controller.dropResult)


export default router;