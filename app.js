const Koa = require('koa');
const { router } = require('./features');
const { MongoClient } = require('mongodb')

const connectionString = 'mongodb+srv://betepoilue:georgesleyeti54@cluster0-meyhp.mongodb.net/test?retryWrites=true'
const client = new MongoClient(connectionString, { useNewUrlParser: true });

const app = new Koa();

app.context.mongoClient = client;

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8000);