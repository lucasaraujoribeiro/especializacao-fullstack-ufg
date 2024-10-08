import { prisma } from "../prisma";

class CheckingAccountService {

    async create(name: string, email: string, number: string) {
        try {
            const checkingAccount = await prisma.checkingAccount.create({
                data: {
                    name,
                    email,
                    number
                }
            });
            return checkingAccount;
        } catch(error) {
            console.error(`Error creating checkingAccount. ${error}`);
            throw error;
        }
    }

    async update(id: string, name: string, email: string, number: string) {
        try {
            const checkingAccount = await prisma.checkingAccount.update({
                where: {id},
                data: {
                    name,
                    email,
                    number
                }
            });

        } catch (error) {
            console.error(`Error update checkingAccount. ${error}`);
            throw error;
        }
    }

    async delete(id: string) {
        try {
            await prisma.checkingAccount.delete({
                where: {id}
            });
        } catch (error) {
            console.error(`Error deleting checkingAccount. ${error}`);
            throw error; 
        }
    }

    async getAll() {
        try {
            const checkingAccounts = await prisma.checkingAccount.findMany({
                orderBy: {
                    name: "asc"
                }
            });
            return checkingAccounts;
        } catch (error) {
            console.error(`Erro fetching checkingAccount. ${error}`);
            throw error;
        }
    }

    async getById(id: string) {
        try {
            const checkingAccount = await prisma.checkingAccount.findUnique({
                where: {id}
            });
            return checkingAccount;
        } catch (error) {
            console.error(`Erro feching checkingAccount by id. ${error}`);
            throw error;
        }
    }

    async findByName(name: string) {
        try {
            const checkingAccounts = await prisma.checkingAccount.findMany({
                where: {
                    name: {
                        contains: name,
                        mode: 'insensitive'
                    }
                }
            });
            return checkingAccounts;
        } catch (error) {
            console.error(`Erro feching checkingAccount by name. ${error}`);
            throw error;
        }
    }
}

export { CheckingAccountService}