import { Express } from "express";

import travelsRoute from "./travels.route";

const routes = (app: Express): void => {
	app.use("/api/travels", travelsRoute);
};

export default routes;
