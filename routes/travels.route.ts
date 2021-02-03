import { Router } from "express";
import travelsControler from "../app/controllers/travels.controler";

const travelsRoute = Router();

// [GET]
travelsRoute.get("/", travelsControler.fetchTravelLog);

// [POST]
travelsRoute.post("/", travelsControler.createTravelLog);

export default travelsRoute;
