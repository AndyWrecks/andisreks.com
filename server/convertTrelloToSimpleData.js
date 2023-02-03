const {
  loadSimpleMediaList,
  loadTrelloCards,
  loadLists,
} = require("./helpers/db");

const convert = async function () {
  const mediaList = await loadSimpleMediaList();
  const trelloCards = await loadTrelloCards();
  const trelloLists = await (await loadLists()).find({}).toArray();

  await trelloCards
    .find({})
    .toArray()
    .then((data) => {
      const dataLength = data.length;
      let count = 1;

      let updates = data.map(async (entry) => {
        const mediaData = {
          name: entry.name,
          trelloId: entry.id,
          category: trelloLists.find((list) => list.id === entry.idList)
            .category,
          rank: entry.pos,
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

        // await mediaList.updateOne(
        //   { trelloId: entry.id },
        //   { $set: mediaData },
        //   { upsert: true },
        //   (err) => {
        //     if (err) {
        //       console.log(err);
        //     }
        //
        //     ++count;
        //     console.log(`${entry.name} (${count} / ${dataLength}) Complete`);
        //   }
        // );
      });

      return Promise.all(updates).then((updates) => {
        mediaList.bulkWrite(updates);
      });
    });
};

module.exports = convert();
