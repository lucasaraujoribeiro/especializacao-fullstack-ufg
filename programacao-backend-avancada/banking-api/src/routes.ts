import { Router } from "express";
import { CheckingAccountController } from "./controllers/CheckingAccountController";
import { StatementController } from "./controllers/StatementController";
import { AuthController } from "./controllers/AuthController";

const checkingAccount = new CheckingAccountController();
const statementController = new StatementController();
const authController = new AuthController();

const routes = Router();

const path = "/checkingaccounts";

routes.get(path, authController.authMiddleware, checkingAccount.findAll);

routes.get(`${path}/:id`, authController.authMiddleware, checkingAccount.findById);

routes.get(`${path}/find/byname`, authController.authMiddleware, checkingAccount.findByName);

routes.post(path, authController.authMiddleware, checkingAccount.create);

routes.put(`${path}/:id`, authController.authMiddleware, checkingAccount.verifyIfExists, checkingAccount.update);

routes.post(`${path}/:id/deposit`, authController.authMiddleware, checkingAccount.verifyIfExists, statementController.verifyAmmoutAndDescription, statementController.deposit);

routes.get(`${path}/:id/statement`, authController.authMiddleware, checkingAccount.verifyIfExists, statementController.getStatement);

routes.get(`${path}/statement/:id`, authController.authMiddleware, statementController.getStatementById);

routes.get(`${path}/:id/statement/period`, authController.authMiddleware, statementController.getByPeriod);

routes.post(`${path}/:id/withdraw`, authController.authMiddleware, checkingAccount.verifyIfExists, statementController.verifyAmmoutAndDescription, statementController.withdraw);

routes.get(`${path}/:id/balance`, authController.authMiddleware, checkingAccount.verifyIfExists, statementController.getBalance);

routes.post(`${path}/:id/pix`, authController.authMiddleware, checkingAccount.verifyIfExists, statementController.pix);

routes.post(`${path}/:id/ted`, authController.authMiddleware, checkingAccount.verifyIfExists, statementController.verifyAmmoutAndDescription, statementController.ted);

export { routes };