import { Router } from "express"; 
//only some of the functions of express

import linkRoutes from "./links.js";

const router = Router();

router.get("/", (request, response) => response.send("GROOT."));
router.use("/", linkRoutes);

export default router