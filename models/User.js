import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    email: { type: String, required: true },
    telephone: String,
    gender:
    {
        type: String,
        default: 'N/A',
        enum: ['Male', 'Female', 'Other', 'N/A']
    }
});

const User = new mongoose.model('User', userSchema);
export default User;
