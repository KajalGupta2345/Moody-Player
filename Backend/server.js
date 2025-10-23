require('dotenv').config();
const app = require("./src/app");
const connectedToDB = require("./src/db/db");


connectedToDB();
app.listen(3000, () => {
    console.log("server is listening on port 3000");
}); 