const Router = require('koa-router');

const activitiesRouter = new Router();
activitiesRouter.prefix('/activities');

// get all notes from a collection
// see for pagination
// TODO: reafactor routes logic into their own controllers.
activitiesRouter.get('/:collection', async (ctx, next) => {
    if (!ctx.params.collection) {
        ctx.body = "You can't view documents from an empty collection, please visit a collection like '/test' ";
    }
    await ctx.mongoClient.connect();

    const db = ctx.mongoClient.db('logz');
    let notes = await db.collection(ctx.params.collection).find({}).toArray();

    console.log(notes)

    ctx.mongoClient.close();

    ctx.body = JSON.stringify(notes)
})

// Add a note to collection
activitiesRouter.post('/:collection', async function(ctx, next) {
    // add a log entry to the corresponding :collection param
    let newNote = ctx.request.body;

    await ctx.mongoClient.connect();
    if (ctx.params.collection && newNote && Object.keys(newNote).length > 0) {
        const db = ctx.mongoClient.db('logz');
        // TODO: update to make it dynamic.

        // TODO: add a type for note to allow cleaning the variable
        newNote = Object.assign({}, newNote, { date: +new Date(), });
        let r = await db.collection(ctx.params.collection).insertOne(newNote)
        ctx.mongoClient.close();
    }
    ctx.body = 'Success'
})

module.exports = {
    activitiesRouter
}
