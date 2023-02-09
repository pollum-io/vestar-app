import mongoose, { Model } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// OUR TODO SCHEMA
const TodoSchema = new mongoose.Schema({
  item: String,
  completed: Boolean,
});
let Todo: Model<typeof TodoSchema>;

async function dbConnect() {
  if (cached.conn) {
    const conn = cached.conn;
    Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
    console.log("from cached", Todo);
    return { conn, Todo };
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
    Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

    console.log("Todo", Todo);
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  let conn = cached.conn;

  return { conn, Todo };
}

export default dbConnect;
