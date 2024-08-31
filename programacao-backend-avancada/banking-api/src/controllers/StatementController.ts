/*
    Realizar depósito: POST (/checkingAccounts/:id/deposit)
    Realizar saque: POST (/checkingAccounts/:id/withdraw)
    Realizar pix: POST (/checkingAccounts/:id/pix)
    Consultar saldo: GET (/checkingAccounts/:id/balance)
    Consultar extrato: GET (/checkingAccounts/:id/statement)
*/

import { Request, Response } from "express";
import { prisma } from "../prisma";
import { Statement } from "@prisma/client";

class StatementController {

    // POST /checkingaccount/:id/deposit
    // { amount, description }
    async deposit(req: Request, res: Response) {
        try {
            const idCheckingAccount = req.params.id;
            const { amount, description} = req.body;

            if (amount < 0) {
                return res.status(400).json({msg: "Invalid amount"})
            }
            
            const statement = await prisma.statement.create({
                data: {
                    idCheckingAccount,
                    amount,
                    description,
                    type: "credit"
                }
            });
            return res.status(201).json(statement);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    }

    async getStatement(req: Request, res: Response) {
        try {
            const idCheckingAccount = req.params.id;
            const statements = await prisma.statement.findMany({
                where: {idCheckingAccount}
            });
            return res.status(200).json(statements);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error});
        }
    }

    async withdraw(req: Request, res: Response) {
        try {
            const idCheckingAccount = req.params.id;
            let { amount, description } = req.body;

            if (amount < 0) {
                return res.status(400).json({msg: "Invalid amount"})
            }

            const statement = await prisma.statement.create({
                data: {
                    amount: amount * -1,
                    description,
                    idCheckingAccount,
                    type: "debit"
                }
            });
            return res.status(201).json(statement);
        } catch(error) {
            console.log(error);
            return res.status(500).json({error});
        }
    }
}

export { StatementController }