const { loadSimpleMediaList, loadTrelloCards } = require("./helpers/db");

const convert = async function () {
  const mediaList = await loadSimpleMediaList();
  const trelloList = await loadTrelloCards();

  await trelloList
    .find({})
    .toArray()
    .then((data) => {
      data.forEach((entry, index) => {
        const mediaData = {
          name: entry.name,
          trelloId: entry.id,
        };

        mediaList.updateOne(
          { trelloId: entry.id },
          { $set: mediaData },
          { upsert: true },
          (err) => {
            console.log(`updated ${entry.name}`);
            if (err) {
              console.log(err);
            }
          }
        );

        return;
      });
    });
};

module.exports = convert();
