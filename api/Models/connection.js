import mongoose from "mongoose";

const url = 'mongodb://127.0.0.1:27017/myTo-Do-App_class';

mongoose.connect(url);

console.log("Connection Established with MongoDB at " + url);