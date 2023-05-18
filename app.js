const express = require ('express');
const db = require ('./pkg/db/index');
const sportHandler = require ('./handlers/sportHandlers');
const sportistHandlers = require ('./handlers/sportistHandlers');
const userHandlers = require ('./handlers/userHandler');

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.init();

app.route("/sport")
.get(sportHandler.getAll)
.post(sportHandler.create);

app.route("/sport/:id")
.get(sportHandler.getOne)
.patch(sportHandler.update)
.delete(sportHandler.delete);

app.listen (process.env.PORT, (err) => {
    if (err) {
        return console.log("Coldnt start the service");
    }
    console.log("Service succesfully started on port 10000");
});