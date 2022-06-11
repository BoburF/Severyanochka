const express = require('express')
const app = express()
const path = require('path')

const { create } = require('express-handlebars')
const xhbs = create({
    extname: 'hbs', 
    defaultLayout: 'layout'
});

const homeRouter = require('./routes/home')

app.engine("hbs", xhbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views/");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/', homeRouter)

try {
    const port = 5000
    app.listen(port, () => {
        console.log('Server working on', port);
    })
} catch (error) {
    console.log(error);
}