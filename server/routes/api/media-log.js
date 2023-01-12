const express = require("express");
const mongodb = require("mongodb");
const axios = require("axios");
const fetch = require("node-fetch");

const router = express.Router();
const mediaLogBoardId = "Hb7nAFL1";

const trelloBaseUrl = `https://api.trello.com/1`;
const trelloBoardUrl = `${trelloBaseUrl}/boards/${mediaLogBoardId}`;
const trelloAuth = `?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_TOKEN}`;
const trelloConfig = {
  method: "GET",
  headers: { Accept: "application/json" },
};

// Get
router.get("/", async (req, res) => {
  const posts = await loadMediaLists();

  res.send(await posts.find({}).toArray());
});

// Add
router.get("/trello-fetch", async (req, res) => {
  const listCollection = await loadMediaLists();
  const cardCollections = await loadMediaCards();
  const lists = await axios
    .get(`${trelloBoardUrl}/lists${trelloAuth}`, { ...trelloConfig })
    .then((response) => {
      return response.data;
    });

  await lists.forEach((list) => {
    listCollection.updateOne(
      { id: list.id },
      { $set: list },
      { upsert: true },
      (err, doc) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });

  let cards = await Promise.all(
    lists.map((list) => {
      return axios
        .get(`${trelloBaseUrl}/lists/${list.id}/cards${trelloAuth}`, {
          ...trelloConfig,
        })
        .then((response) => {
          return response.data;
        });
    })
  );

  cards = cards.flat();

  await cards.forEach((card) => {
    cardCollections.updateOne(
      { id: card.id },
      { $set: card },
      { upsert: true },
      (err, doc) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });

  res.send({
    lists: lists,
    cards: cards,
  });
});

// Delete Post

const mongoUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.j62du6m.mongodb.net/?retryWrites=true&w=majority`;

async function loadMediaLists() {
  const client = await mongodb.MongoClient.connect(mongoUrl, {
    useNewUrlParser: true,
  });

  return client.db("andisReks").collection("mediaLists");
}

async function loadMediaCards() {
  const client = await mongodb.MongoClient.connect(mongoUrl, {
    useNewUrlParser: true,
  });

  return client.db("andisReks").collection("mediaCards");
}

module.exports = router;
