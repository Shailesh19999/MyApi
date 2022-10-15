const express = require("express");
require("../src/db/connection");
const router = require("./routers/men")
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(router)



app.listen(port, () => {
  console.log(`connection is live at port number. ${port}`);
});
