import express, { Express, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

import notFound from "./middlewares/notFound";
import handleError from "./middlewares/handleError";

import routes from "./routes";

import connectDB from "./app/configs/mongoDB";

const app: Express = express();

const PORT: number | string = process.env.PORT || 8080;

// Middlewares;
dotenv.config();
app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded());
app.use(helmet());
app.use(cors());

// ConnectDB
connectDB();

// Routes
routes(app);

// Handler Error
app.use(notFound);
app.use(handleError);

app.listen(PORT, (): void => console.log(`Listening at port ${PORT}`));
