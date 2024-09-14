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
            const withDraw = this.createDebit(idCheckingAccount, amount, `SAQUE - ${description}`)
            return withDraw;
        } catch (error) {
            console.error(`Error creating pix. ${error}`);
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
            console.error(`Erro fetching statements. ${error}`);
            throw error;
        }
    }

    async getById(idStatement: string) {
        try {
            const statement = await prisma.statement.findUnique({
                where: {
                    id: idStatement
                }
            });
        } catch (error) {
            console.log(`Error featching statement by id. ${error}`);
            throw error;
        }
    }

    async getByPeriod(idCheckingAccount: string, startDate: Date, endDate: Date) {
        try {
            const statements = await prisma.statement.findMany({
                where: {
                    idCheckingAccount,
                    createdAt: {
                        gte: startDate,
                        lte: endDate
                    }
                },
                orderBy: {
                    createdAt: "desc"
                }
            });
            return statements;
        } catch (error) {
            console.error(` ${error}`);
            throw error;
        }
    }

    async pix(idCheckingAccount: string, amount: number, description: string) {
        try {
            const pix = this.createDebit(idCheckingAccount, amount, `PIX - ${description}`)
            return pix;
        } catch (error) {
            console.error(`Error creating pix. ${error}`);
            throw error;
        }
    }

    async ted(idCheckingAccount: string, amount: number, description: string) {
        try {
            const ted = this.createDebit(idCheckingAccount, amount, `TED - ${description}`)
            return ted;
        } catch (error) {
            console.error(`Error creating ted. ${error}`);
            throw error;
        }
    }

    async createDebit(idCheckingAccount: string, amount: number, description: string) {
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
            return statement;
        } catch (error) {
            console.log(`Error creating withdraw: ${error}`);
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