const MongoClient = require('mongodb').MongoClient;
const dbURL = 'mongodb://127.0.0.1:27017';
const dbName = 'recipe_db';
const client = new MongoClient(dbURL);

async function main() {
  await client.connect();
  console.info('connect success');
  const db = client.db(dbName);
  const collection = db.collection('contacts');

  try {
    await collection.insertOne({
      name: 'lisi2',
      email: 'lisi2@456.com'
    });
    const result = await collection.find().toArray();
    console.info(result);
  } catch (error) {
    console.info(`Error logging: ${error}`);
  }

  return 'done.';
}

main()
  .then(() => {
    console.info('then');
  })
  .catch((err) => {
    console.info('err: ');
    console.info(err);
  })
  .finally(() => {
    client.close();
  });

/*MongoClient.connect(dbURL, (error, client) => {
  if (error) {
    throw error;
  }
  let db = client.db(dbName);

  db.collection('contacts')
    .insert({
      name: 'lisi',
      email: 'lisi@456.com'
    }, (error, db) => {
      if (error) {
        throw error;
      }
      console.info(db);
    });
  db.collection('contacts')
    .find()
    .toArray((error, data) => {
      if (error) {
        throw error;
      }
      console.info(data);
    })
});*/
