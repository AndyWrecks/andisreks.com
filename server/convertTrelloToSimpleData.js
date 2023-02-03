const {
  loadSimpleMediaList,
  loadTrelloCards,
  loadLists,
} = require("./helpers/db");
const { getOmdbTitleByName } = require("./getAndStoreMovieData");

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
        const mediaData = {
          name: entry.name,
          trelloId: entry.id,
          category: trelloLists.find((list) => list.id === entry.idList)
            .category,
          rank: entry.pos,
          imdbId: await getOmdbTitleByName(entry.name).then(
            (data) => data.imdbID
          ),
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
        // mediaList.bulkWrite(updates);
      });
    });
};

module.exports = convert();
