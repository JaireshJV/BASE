import express from "express";
import { db } from "./config/db.js";
import customerroute from "./routes/customer.routes.js";
import loginroute from "./routes/login.route.js"

const app = express();
app.use(express.json())

db()

app.use('/api/customer',customerroute);
app.use('/api/auth',loginroute)  ;









app.listen(5000, () => {
  console.log("App is running in PORT 5000");
});


