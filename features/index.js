const Router = require('koa-router');
const { activitiesRouter } = require('./activities/routes.js')

const router = new Router();

router.use(activitiesRouter.routes());

module.exports = {
    router,
}