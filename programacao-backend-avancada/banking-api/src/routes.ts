import { Router } from "express";
import { CheckingAccountController } from "./controllers/CheckingAccountController";
import { StatementController } from "./controllers/StatementController";

const checkingAccount = new CheckingAccountController();
const statementController = new StatementController();

const routes = Router();

const path = "/checkingaccounts";

routes.get(path, checkingAccount.findAll);

routes.get(`${path}/:id`, checkingAccount.findById);

routes.get(`${path}/find/byname`, checkingAccount.findByName);

routes.post(path, checkingAccount.create);

routes.put(`${path}/:id`, checkingAccount.verifyIfExists, checkingAccount.update);

routes.post(`${path}/:id/deposit`, checkingAccount.verifyIfExists, statementController.verifyAmmoutAndDescription, statementController.deposit);

routes.get(`${path}/:id/statement`, checkingAccount.verifyIfExists, statementController.getStatement);

routes.get(`${path}/statement/:id`, statementController.getStatementById);

routes.get(`${path}/:id/statement/period`, statementController.getByPeriod);

routes.post(`${path}/:id/withdraw`, checkingAccount.verifyIfExists, statementController.verifyAmmoutAndDescription, statementController.withdraw);

routes.get(`${path}/:id/balance`, checkingAccount.verifyIfExists, statementController.getBalance);

routes.post(`${path}/:id/pix`, checkingAccount.verifyIfExists, statementController.pix);

routes.post(`${path}/:id/ted`, checkingAccount.verifyIfExists, statementController.verifyAmmoutAndDescription, statementController.ted);

export { routes };