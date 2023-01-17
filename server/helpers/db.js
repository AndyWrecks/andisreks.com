require("dotenv").config();
const mongodb = require("mongodb");

const mongoUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.j62du6m.mongodb.net/?retryWrites=true&w=majority`;

async function loadCollection(collection) {
  const client = await mongodb.MongoClient.connect(mongoUrl, {
    // @ts-ignore
    useNewUrlParser: true,
  });

  return client.db("andisReks").collection(collection);
}

module.exports = {
  loadLists: function () {
    return loadCollection("mediaLists");
  },
  loadTrelloCards: function () {
    return loadCollection("mediaCards");
  },
};
