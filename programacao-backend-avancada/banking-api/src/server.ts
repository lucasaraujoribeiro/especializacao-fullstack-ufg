import express from "express";
import { routes } from "./routes";
import { userRoutes } from "./user-routes";

const app = express();

app.use(express.json());
app.use(routes);
app.use(userRoutes);

app.listen(3000, () => console.log("Server is running"));