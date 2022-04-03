const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

const connect = async () => {
  const client = await MongoClient.connect("mongodb://127.0.0.1:27017");
//   const client = await MongoClient.connect("mongodb://localhost:27017"); // throws and error
  database = client.db("blog");
};

const getDb = () => {
  if (!database) {
    throw { message: "Database Connection not established" };
  }
  return database;
};

module.exports = {
  connectToDatabase: connect,
  getDb: getDb
};
