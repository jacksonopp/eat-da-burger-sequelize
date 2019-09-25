const db = require("../models");
module.exports = function (app) {
    app.get("/", async function (req, res) {
        const dbBurger = await db.Burger.findAll({})
        console.log(dbBurger.burger_name);
        const isEaten = dbBurger.filter(burger => burger.devoured === 0)
        const isNotEaten = dbBurger.filter(burger => burger.devoured === 1)
        res.render("index", dbBurger);
    })
}