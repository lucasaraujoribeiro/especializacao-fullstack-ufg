import { prisma } from "../prisma";

class StatementService {
    
    async deposit(idCheckingAccount: string, amount: number, description: string) {
        try {
            this.validateAmount(amount);
            const statement = await prisma.statement.create({
                data: {
                    idCheckingAccount,
                    amount,
                    description,
                    type: 'credit'
                }
            });
            return statement;
        } catch (error) {
            console.log(`Error creating deposit: ${error}`);
            throw error;
        }
    }

    async withDraw(idCheckingAccount: string, amount: number, description: string) {
        try {
            this.validateAmount(amount);
            
            const balance = await this.getBalance(idCheckingAccount);
            if (amount > balance) {
                throw new Error("Insufficient funds.");
            }

            const statement = await prisma.statement.create({
                data: {
                    amount: amount * -1,
                    description,
                    idCheckingAccount,
                    type: "debit"
                }
            });
        } catch (error) {
            console.log(`Error creating withdraw: ${error}`);
            throw error;
        }
    }

    async getBalance(idCheckingAccount: string) {
        try {
            const aggregate = await prisma.statement.aggregate({
                _sum: {
                    amount: true
                },
                where: {idCheckingAccount}
            });
            return aggregate._sum.amount ?? 0;
        } catch (error) {
            console.log(`Error fetchig balance: ${error}`);
            throw error;
        }
    }

    async getAll(idCheckingAccount: string) {
        try {
            const statements = await prisma.statement.findMany({
                where: {
                    idCheckingAccount
                },
                orderBy: {
                    createdAt: "desc"
                }
            });
            return statements;
        } catch (error) {
            console.error(`Erro fetching statement. ${error}`);
            throw error;
        }
    }

    validateAmount(amount: number) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
    }
}

export {StatementService};