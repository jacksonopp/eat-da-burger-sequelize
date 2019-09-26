const db = require("../models");
module.exports = function (app) {
    app.get("/", async function (req, res) {
        const dbBurger = await db.Burger.findAll({});
        res.render("index", { burger: dbBurger });
    })
}