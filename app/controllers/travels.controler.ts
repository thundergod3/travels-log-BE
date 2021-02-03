import { Document } from "mongoose";
import { NextFunction, Request, Response } from "express";

import TravelsModel, {
	TravelLogI,
	TravelLogListI,
} from "../models/travels.model";

class TravelsController {
	// [GET]
	fetchTravelLog = async (
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<any> => {
		try {
			const travelLogList: TravelLogListI = await TravelsModel.find({});
			res.status(200).json(travelLogList);
		} catch (error) {
			console.error(error);
			next(error);
		}
	};

	// [POST]
	createTravelLog = async (
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<any> => {
		try {
			const travelLog: Document<TravelLogI> = new TravelsModel(req.body);
			const createdEntry = await travelLog.save();

			res.status(201).json(createdEntry);
		} catch (error) {
			console.error(error.name);
			if (error.name === "ValidationError") {
				res.status(422);
			}
			next(error);
		}
	};
}

export default new TravelsController();
