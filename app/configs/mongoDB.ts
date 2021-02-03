import mongoose from "mongoose";

const connectDB = (): Promise<any> =>
	mongoose.connect(process.env.DATABASE_URL, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

export default connectDB;
