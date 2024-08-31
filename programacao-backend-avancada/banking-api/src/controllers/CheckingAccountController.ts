import { Request, Response, NextFunction } from "express";
import { prisma } from "../prisma";

class CheckingAccountController {

    async create(req: Request, res: Response) {
        try {
            let { name, email, number } = req.body;
            console.log(number);
            const checkingAccount = await prisma.checkingAccount.create({
                data: {name, email, number: number}
            });
            return res.status(200).json(checkingAccount);
        } catch(error) {
            console.log(error);
            res.status(500).json({error})
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const { name, email, number } = req.body;
            const checkingAccount = await prisma.checkingAccount.update({
                where: {id},
                data: {
                    name,
                    email,
                    number
                }
            });
            return res.status(200).json(checkingAccount);
        } catch(error) {
            console.log(error);
            res.status(500).json({error})
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const checkingAccounts = await prisma.checkingAccount.findMany();
            return res.status(200).json(checkingAccounts);
        } catch(error) {
            console.log(error);
            res.status(500).json({error})
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const checkingAccount = await prisma.checkingAccount.findUnique({
                where: {id}
            });
            return res.status(200).json(checkingAccount);
        } catch(error) {
            console.log(error);
            res.status(500).json({error})
        }
    }

    async verifyIfExists(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            console.log(`Verificando se o id ${id} existe...`)
            const checkingAccount = await prisma.checkingAccount.findUnique({
                where: {id}
            });
            if (checkingAccount == null) {
                return res.status(404).json({msg: 'Not found'});
            }
            console.log(`Existe!`)
            return next();
        } catch(error) {
            console.log(error);
            res.status(500).json({error})
        }
    }

}

export { CheckingAccountController }