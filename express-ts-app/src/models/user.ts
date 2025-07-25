import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  age?: number;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, minlength: 3, maxlength: 50 },
  email:    { type: String, required: true, unique: true, match: /.+@.+\..+/ },
  age:      { type: Number, min: 18, max: 100 }
}, { timestamps: true });

export const UserModel = model<IUser>('User', userSchema);
