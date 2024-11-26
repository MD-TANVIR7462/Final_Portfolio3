import { model, Schema } from "mongoose";
import { AppError } from "../../error/AppErrors";
import { StatusCodes } from "http-status-codes";
require('dotenv').config();
export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "Admin";
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  { timestamps: true }
);



// Create the UserData object using environment variables
const UserData = {
  name: process.env.USER_NAME,
  email: process.env.USER_EMAIL,
  role: process.env.USER_ROLE,
  password: process.env.USER_PASSWORD,
};

export const User = model<IUser>("User", userSchema);

export const seed = async () => {
  try {
    const isUserExists = await User?.findOne(UserData);
    if (!isUserExists) {
      await User?.create(UserData);
    }
  } catch (error: any) {
    throw new AppError(StatusCodes.FORBIDDEN, error?.message);
  }
};
