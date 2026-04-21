import express from "express";
import { db } from "./config/db.mjs";
import customerroute from "./routes/customer.routes.mjs";
import loginroute from "./routes/login.route.mjs"

const app = express();
app.use(express.json())

db()

app.use('/api/customer',customerroute);
app.use('/api/auth',loginroute)  ;









app.listen(5000, () => {
  console.log("App is running in PORT 5000");
});


