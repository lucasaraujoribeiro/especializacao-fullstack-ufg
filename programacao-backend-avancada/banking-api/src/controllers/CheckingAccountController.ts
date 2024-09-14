import { Request, Response, NextFunction } from "express";
import { prisma } from "../prisma";
import { CheckingAccountService } from "../service/CheckingAccountService";
import { debug } from "console";

class CheckingAccountController {

    private checkingAccountService;

    constructor() {
        this.checkingAccountService = new CheckingAccountService();
    }

    create = async (req: Request, res: Response) => {
        try {
            const { name, email, number } = req.body;

            const validation = this.isValidNameAndEmailAndNumber(name, email, number);
            if (!validation.isValid) {
                return res.status(400).json({error: validation.msg});
            }
            const checkingAccount = await this.checkingAccountService.create(name, email, number);
            return res.status(201).json(checkingAccount);
        } catch (error) {
            this.handleError(res, error, 'Erro creating checkingAccount.');
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const { name, email, number } = req.body;

            const validation = this.isValidNameAndEmailAndNumber(name, email, number);
            if (!validation.isValid) {
                return res.status(400).json({error: validation.msg});
            }

            const checkingAccount = await this.checkingAccountService.update(id, name, email, number);
            return res.status(200).json(checkingAccount);
        } catch(error) {
            this.handleError(res, error, 'Error update checkingAccount.');
        }
    }

    findAll = async (req: Request, res: Response) => {
        try {
            const checkingAccounts = await this.checkingAccountService.getAll();
            return res.status(200).json(checkingAccounts);
        } catch(error) {
            this.handleError(res, error, 'Error fetching checkingAccounts');
        }
    }

    findById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const checkingAccount = await this.checkingAccountService.getById(id);
            return res.status(200).json(checkingAccount);
        } catch(error) {
            this.handleError(res, error, 'Error fetching checkingAccount by id.');
        }
    }

    findByName = async (req: Request, res: Response) => {
        try {
            let { name } = req.query;
            console.log(`Name: ${name}`);

            if (!name || name.toString().trim().length === 0) {
                return res.status(400).json({error: 'Name invalido ou vazio'})
            }
            name = name.toString();
            const checkingAccounts = await this.checkingAccountService.findByName(name);
            
            return res.status(200).json(checkingAccounts);
        } catch (error) {
            this.handleError(res, error, 'Error fetching checkingAccount by name.');
        }
    }

    verifyIfExists = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const checkingAccount = await prisma.checkingAccount.findUnique({
                where: {id}
            });
            if (checkingAccount == null) {
                return res.status(404).json({msg: 'Not found'});
            }
            return next();
        } catch(error) {
            console.log(error);
            res.status(500).json({error})
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

    private isValidNameAndEmailAndNumber(name: any, email: any, number: any) {
        if (typeof name !== 'string' || name.trim().length== 0) {
            return {isValid: false, msg: 'Invalid name: must be a non empty string'};
        }
        if (typeof email !== 'string' || email.trim().length === 0) {
            return {isValid: false, msg: 'Invalid number: must be a non empty string'}
        }
        if (typeof number !== 'string' || number.trim().length === 0) {
            return {isValid: false, msg: 'Invalid number: must be a non empty string'}
        }
        return {isValid: true};
    }
}

export { CheckingAccountController }