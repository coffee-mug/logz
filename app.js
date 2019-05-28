const Koa = require('koa');
const { router } = require('./features');
const { MongoClient } = require('mongodb')

const bodyParser = require('koa-bodyparser');

const username = process.env.DB_USER
const password = process.env.DB_PASSWORD

const connectionString = `mongodb+srv://${username}:${password}@cluster0-meyhp.mongodb.net/test?retryWrites=true`
const client = new MongoClient(connectionString, { useNewUrlParser: true });

const app = new Koa();

app.context.mongoClient = client;

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8000);