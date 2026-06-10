const { MongoClient } = require("mongodb");

const uri ="mongodb+srv://kelnasv09_db_user:ZtX2HQ68TFUb4098@cluster0.dtoyxkj.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

run();