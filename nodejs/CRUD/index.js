import express from "express";
import { db } from "./config/db.js";
import customerroute from "./routes/customer.routes.js";

const app = express();
app.use(express.json())

db()

app.use('/api/customer',customerroute);









app.listen(3000, () => {
  console.log("App is running in PORT 3000");
});


