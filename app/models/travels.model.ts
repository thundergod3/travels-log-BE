import mongoose, { mongo } from "mongoose";

interface TravelLogI {
	title?: string;
	langtitude?: number;
	longitude?: number;
	createdAt?: Date;
	updatedAt?: Date;
	visitData?: Date;
}

type TravelLogListI = Array<TravelLogI>;

const Schema = mongoose.Schema;

const requiredField = (type: any, moreOption?: any): Object => {
	return {
		type,
		required: true,
		...(moreOption ? moreOption : {}),
	};
};

const travelsSchema = new Schema(
	{
		title: requiredField(String),
		description: String,
		comments: String,
		image: String,
		rating: requiredField(Number, { min: 0, max: 10, default: 0 }),
		latitude: requiredField(Number, {
			min: -90,
			max: 90,
		}),
		longitude: requiredField(Number, {
			min: -180,
			max: 180,
		}),
		updatedAt: requiredField(Date, {
			default: Date.now,
		}),
		visitDate: requiredField(Date, {
			default: Date.now,
		}),
	},
	{ timestamps: true }
);

const TravelsModel = mongoose.model("travels", travelsSchema);

export default TravelsModel;
export { TravelLogI, TravelLogListI };
