require('dotenv').config()
const Koa = require('koa')
const Router = require('@koa/router');
const koaBody = require('koa-body');
const app = new Koa()
const router = new Router();

const {getContacts} = require('./src/google-contacts')

app.use(koaBody());
app.use(async (ctx, next) => {
    ctx.accepts("json")
    next()
})

router.get('/meeting-participants', async ctx => {
    ctx.body = await getContacts()
})

router.post('/generate-meeting', (ctx) => {

})

app.use(router.routes())
    .use(router.allowedMethods())
    .listen(3000)
