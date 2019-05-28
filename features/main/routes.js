const fs = require('fs');
const Router = require('koa-router');


const mainRouter = new Router();

// get all notes from a collection
// see for pagination
// TODO: reafactor routes logic into their own controllers.
mainRouter.get('/', async ctx => {
  ctx.body = fs.createReadStream('../../templates/index.html');
});

module.exports = {
  mainRouter
}