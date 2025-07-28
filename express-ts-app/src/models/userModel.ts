// src/models/user.model.ts
import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  comparePassword(candidate: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, minlength: 5, maxlength: 60 },
    email: { type: String, required: true, unique: true, match: [/.+@.+\..+/, 'Invalid email'] },
    password: { type: String, required: true, minlength: 5, maxlength: 100 },
  },
  { timestamps: true }
);

UserSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.comparePassword = function (candidate: string) {
  return bcrypt.compare(candidate, this.password);
};
const User1 = mongoose.models.User || mongoose.model('User1', UserSchema);
export default User1;


