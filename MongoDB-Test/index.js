const { MongoClient } = require("mongodb");

const uri =process.env.MONGODB_URI;

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