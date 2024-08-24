import { Router } from "express";
import { CustomerController } from "./controllers/CustomerController";

const customerController = new CustomerController();

const routes = Router();

routes.get("/customers", customerController.findAll);

routes.get("/customers/:id", customerController.findById);

routes.post("/customers", customerController.create);

routes.put("/customers/:id", customerController.verifyIfExists, customerController.update);

routes.delete("/customers/:id", customerController.verifyIfExists, customerController.delete);

export { routes };