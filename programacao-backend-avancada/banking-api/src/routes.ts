import { Router } from "express";
import { CheckingAccountController } from "./controllers/CheckingAccountController";
import { StatementController } from "./controllers/StatementController";

const checkingAccount = new CheckingAccountController();
const statementController = new StatementController();

const routes = Router();

const path = "/checkingaccounts";

routes.get(path, checkingAccount.findAll);

routes.get(`${path}/:id`, checkingAccount.findById);

routes.post(path, checkingAccount.create);

routes.put(`${path}/:id`, checkingAccount.verifyIfExists, checkingAccount.update);

routes.post(`${path}/:id/deposit`, checkingAccount.verifyIfExists, statementController.deposit);

routes.get(`${path}/:id/statement`, checkingAccount.verifyIfExists, statementController.getStatement);

routes.post(`${path}/:id/withdraw`, checkingAccount.verifyIfExists, statementController.withdraw);

export { routes };