import mongoose from "mongoose";



const MONGODB_URI = process.env.MONGODB_URI; // Add this to your environment variables

let cached = global.mongoose;
console.log(MONGODB_URI);

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      
    }).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}