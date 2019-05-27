const Router = require('koa-router');

const activitiesRouter = new Router();
activitiesRouter.prefix('/activities');

activitiesRouter.get('/:collection', async function(ctx, next) {
    // add a log entry to the corresponding :collection param
    await ctx.mongoClient.connect();

    if (ctx.params.collection) {
        const db = ctx.mongoClient.db('logz');
        // TODO: update to make it dynamic.
        let r = await db.collection(ctx.params.collection).insertOne({
            date: new Date(),
            log: 'Do the laundy'
        })
        ctx.mongoClient.close();
    }
    ctx.body = "hello activities"
})

module.exports = {
    activitiesRouter
}
