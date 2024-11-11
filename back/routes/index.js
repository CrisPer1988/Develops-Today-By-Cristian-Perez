import express from "express";
import {
  getAllCountries,
  getFlag,
  infoOneCountry,
  population,
} from "../controllers/index.js";

const router = express.Router();

router.get("/", getAllCountries);
router.post("/flag", getFlag);
router.post("/population", population);
router.get("/:code", infoOneCountry);

export default router;
