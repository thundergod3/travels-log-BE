import { NextFunction, Request, Response } from "express";

const handleError = (
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	const statusCode: number = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(statusCode).json({
		msg: error.message,
		stack:
			process.env.NODE_ENV === "production"
				? "Something went error"
				: error.stack,
	});
};

export default handleError;
