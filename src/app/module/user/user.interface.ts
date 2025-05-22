import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export interface IUser {
	name:string,
	email:string,
	password:string,
	role:'admin' | 'user',
	isBlocked: boolean,
	createdAt?: Date ,
	updatedAt?: Date
}
export interface UserModel extends Model<IUser> {
  isUserExitsByCustomId(id: string): Promise<IUser>;
  isPasswordMatched(
    plaineTextPasswored: string,
    hasedPassword: string,
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(passwordChangedTimestamp:Date,jwtIssuedTimestamp:number ):boolean;
  isDeleted(id: string): Promise<boolean>;
  userStatus(id: string): Promise<string>;

}
export type TUserRole = keyof typeof USER_ROLE;