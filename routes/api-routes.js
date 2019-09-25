const db = require("../models");
module.exports = function (app) {
    //get all burgers
    app.get("/api/burger", async function (req, res) {
        const dbBurger = await db.Burger.findAll({});
        res.json(dbBurger);
    })

    //create a burger
    app.post("/api/burger", async function (req, res) {
        const dbBurger = await db.Burger.create({
            burger_name: req.body.burger_name
        })
        res.json(dbBurger);
    })

    //eat a burger
    app.put("/api/burger/:id", async function (req, res) {
        const dbBurger = await db.Burger.update({
            devoured: 1
        }, {
            where: {
                id: req.params.id
            }
        })
        res.json(dbBurger);
    })
}