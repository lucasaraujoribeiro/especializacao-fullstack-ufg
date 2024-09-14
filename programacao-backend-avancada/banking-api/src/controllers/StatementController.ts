/*
    Realizar depósito: POST (/checkingAccounts/:id/deposit)
    Realizar saque: POST (/checkingAccounts/:id/withdraw)
    Realizar pix: POST (/checkingAccounts/:id/pix)
    Consultar saldo: GET (/checkingAccounts/:id/balance)
    Consultar extrato: GET (/checkingAccounts/:id/statement)
*/

import { Request, Response, NextFunction } from "express";
import { StatementService } from "../service/StatmentService";

class StatementController {

    private statementService: StatementService;

    constructor() {
        this.statementService = new StatementService();
    }

    deposit = async (req: Request, res: Response) => {
        try {
            const idCheckingAccount = req.params.id;
            const { amount, description} = req.body;

            const statement = await this.statementService.deposit(idCheckingAccount, amount, description);
           
            return res.status(201).json(statement);
        } catch (error) {
            this.handleError(res, error, 'Error featching statement ');
        }
    }

    getStatement = async (req: Request, res: Response) => {
        try {
            const idCheckingAccount = req.params.id;
            const statements = await this.statementService.getAll(idCheckingAccount);
            return res.status(200).json(statements);
        } catch (error) {
            this.handleError(res, error, 'Error featching statement ');
        }
    }

    getStatementById = async (req: Request, res: Response) => {
        try {
            const idStatement = req.params.id;
            const statement = await this.statementService.getById(idStatement);
            return res.status(200).json(statement);
        } catch (error) {
            this.handleError(res, error, 'Error featching statement by id ');
        }
    }

    withdraw = async (req: Request, res: Response) => {
        try {
            const idCheckingAccount = req.params.id;
            let { amount, description } = req.body;
            const statement = await this.statementService.withDraw(idCheckingAccount, amount, description);
            return res.status(201).json(statement);
        } catch(error) {
            this.handleError(res, error, 'Error withdraw');
        }
    }

    getBalance = async(req: Request, res: Response) => {
        try {
            const idCheckingAccount = req.params.id;
            const balance = await this.statementService.getBalance(idCheckingAccount);
            return res.status(200).json({balance});
        } catch (error) {
            this.handleError(res, error, 'Error get balance');
        }
    }

    getByPeriod = async(req: Request, res: Response) => {
        try {
            const idCheckingAccount = req.params.id;
            const {startDate, endDate} = req.query;

            console.log(`Start: ${startDate} - End: ${endDate}`);

            if (!startDate || !endDate) {
                return res.status(400).json({error: 'Start date and end date are required'})
            }
            const start = new Date(startDate as string);
            const end = new Date(endDate as string);

            if (isNaN(start.getTime()) || isNaN(end.getTime())) {
                return res.status(400).json({error: 'Invalid date format'})
            }

            const statements = await this.statementService.getByPeriod(idCheckingAccount, start, end);
            return res.status(200).json(statements);
        } catch (error) {
            this.handleError(res, error, 'Error get statements period');
        }
    }

    pix = async (req: Request, res: Response) => {
        try {
            const idCheckingAccount = req.params.id;
            let { amount, description } = req.body;
            const statement = await this.statementService.pix(idCheckingAccount, amount, description);
            return res.status(201).json(statement);
        } catch(error) {
            this.handleError(res, error, 'Error withdraw');
        }
    }

    ted = async (req: Request, res: Response) => {
        try {
            const idCheckingAccount = req.params.id;
            let { amount, description } = req.body;
            const statement = await this.statementService.ted(idCheckingAccount, amount, description);
            return res.status(201).json(statement);
        } catch(error) {
            this.handleError(res, error, 'Error withdraw');
        }
    }

    private handleError(res: Response, error: unknown, msg: string) {
        if (error instanceof Error) {
            console.error(`${msg}. ${error.message}`);
            return res.status(500).json({error: error.message});
        } else {
            console.error(`Unexpected error ${error}`);
            return res.status(500).json({error: "An unexpected error ocurred."})
         }
    }

    verifyAmmoutAndDescription = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const idCheckingAccount = req.params.id;
            const { amount, description} = req.body;
            if (!amount || !description) {
                return res.status(400).json({error: "Invalid amount or description."});
            }
            if (typeof amount !== "number" || amount <= 0) {
                return res.status(400).json({error: "Invalid amount: must be a positive number."})
            }
            if (typeof description !== "string" || description.trim().length === 0) {
                return res.status(400).json({error: "Invalid description: must be a non empty string."})
            }
            return next();
        } catch (error) {
            this.handleError(res, error, 'Error featching statement ');
        }
    }
}

export { StatementController }