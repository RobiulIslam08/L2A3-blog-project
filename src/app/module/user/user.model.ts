import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

import bcrypt from "bcryptjs";
import config from "../../config";
const userSchema = new Schema<IUser>({
  name:{
	type:String,
	required:[true,'Please provide your name'],
	minlength:3,
	maxlength:50
  },
  email:{
	type:String,
	required:[true, 'Please provide your email'],
	unique:true,
	 validate: {
      validator: function (value: string) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
      },
      message: '{VALUE} is not a valid email',
    },
	immutable:true
  },
  password:{
	type:String,
	required:true,

  },
  role:{
	type:String,
	enum:{
		values:['admin', 'user'],
		message: '{VALUE} is not valid, please provide a valid role',
	},
	default:'user',
	required:true
  },
  isBlocked:{
	type:Boolean,
	default:false
  }
}, 
{
	timestamps:true
})

// userSchema.pre('save', async function (next) {
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const user = this; // doc
//   // hashing password and save into DB

//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_solt_rounds),
//   );

//   next();
// });
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // 👈 prevent re-hashing
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_solt_rounds),
  );
  next();
});

// set '' after saving password
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<IUser>('User',userSchema)