const {
  loadSimpleMediaList,
  loadTrelloCards,
  loadLists,
} = require("./helpers/db");
const { getOmdbTitleByName } = require("./getAndStoreMovieData");
const { list } = require("postcss");

const convert = async function () {
  const mediaList = await loadSimpleMediaList();
  const trelloCards = await loadTrelloCards();
  const trelloLists = await (await loadLists()).find({}).toArray();

  await trelloCards
    .find({})
    .toArray()
    .then((data) => {
      const dataLength = data.length;
      let count = 0;

      let updates = data.map(async (entry) => {
        const associatedTrelloList = trelloLists.find(
          (list) => list.id === entry.idList
        );

        const mediaData = {
          name: entry.name,
          trelloId: entry.id,
          category: associatedTrelloList.category,
          rank: entry.pos,
          imdbId: await getOmdbTitleByName(entry.name).then(
            (data) => data.imdbID
          ),
          standing: (function () {
            const listName = associatedTrelloList.name;

            if (listName.includes("Stack")) {
              return "ranked";
            }

            if (listName.includes("Currently")) {
              return "inProgress";
            }

            return "inQueue";
          })(),
        };

        return new Promise((resolve) => {
          ++count;
          console.log(`Updating ${entry.name} (${count} / ${dataLength})`);
          resolve({
            updateOne: {
              filter: { trelloId: entry.id },
              update: { $set: mediaData },
              upsert: true,
            },
          });
        });
      });

      return Promise.all(updates).then((updates) => {
        mediaList.bulkWrite(updates);
      });
    });
};

module.exports = convert();
