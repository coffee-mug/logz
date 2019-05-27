const Koa = require('koa');
const { router } = require('./features');
const { MongoClient } = require('mongodb')

const username = process.env.username
const password = process.env.db_password

const connectionString = `mongodb+srv://${username}:${password}@cluster0-meyhp.mongodb.net/test?retryWrites=true`
const client = new MongoClient(connectionString, { useNewUrlParser: true });

const app = new Koa();

app.context.mongoClient = client;

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8000);