import { Db } from 'mongodb';

module.exports = {
  async up(db: Db) {
    const docs = await db
      .collection('chats')
      .find({ messages: { $exists: false } })
      .toArray();

    await Promise.all(
      docs.map(async (doc) => {
        if (!doc.messages) {
          await db
            .collection('chats')
            .findOneAndUpdate({ _id: doc._id }, { $set: { messages: [] } });
        }
      }),
    );
  },
};
