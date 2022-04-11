import { Router } from "express";
import * as controllers from "../controllers/nasaPotd.js";

const router = Router();

router.get("/links", controllers.getLinks);
router.get("/links/:id", controllers.getLink);
router.get("/links/title/:title", controllers.getLinkTitle)
router.get("/links/date/:date", controllers.getLinkDate)
router.post("/links", controllers.createLink);
router.put("/links/:id", controllers.updateLink);
router.delete("/links/:id", controllers.deleteLink);

export default router;