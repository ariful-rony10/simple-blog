const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

const connect = async () => {
  const client = await MongoClient.connect("mongodb://localhost:27017");
  database = client.db('blog');
  if(err) throw err;
};

const getDb = () => {
  if (!database) {
    throw { message: "Database Connection not established" };
  }
  return database;
};

module.exports = {
  connectToDatabase: connect,
  getDb: getDb,
};
