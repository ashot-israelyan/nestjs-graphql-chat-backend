import { Db } from 'mongodb';

module.exports = {
  async up(db: Db) {
    const docs = await db.collection('chats').find().toArray();

    console.log(docs[0].messages);

    await Promise.all(
      docs.map(async (doc) => {
        if (doc.messages) {
          const messages = doc.messages.map((message) => {
            return {
              ...message,
              chatId: doc._id,
            };
          });
          await db
            .collection('chats')
            .findOneAndUpdate({ _id: doc._id }, { $set: { messages } });
        }
      }),
    );
  },
};
