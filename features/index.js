const Router = require('koa-router');
const { activitiesRouter } = require('./activities/routes.js');
const { mainRouter } = require('./main/routes.js');

const router = new Router();

router.use(activitiesRouter.routes());
router.use(mainRouter.routes());

module.exports = {
    router,
}