import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const routes = Router();

/*
 Model
    id String 
    name String
    email String
    document String
    createdAt Date now()
    updatedAt Date now()
*/

// GET POST PUT DELETE

routes.get("/customers", async (req, res) => {
    const customers = await prisma.customers.findMany();
    return res.json(customers);
});

routes.get("/customers/:id", async (req, res) => {
    try {
        const id = req.params.id;
        console.log(`Consultando id: ${id}`)
        const customer = await prisma.customers.findUnique({
            where: {id}
        });
        debugger
        if (customer == null) {
            return res.status(404);
        }
        return res.json(customer);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error});
    }
});

routes.post("/customers", async (req, res) => {
    try {
        const {name, email, document} = req.body;
        const customer = await prisma.customers.create({
            data: {
                name,
                email,
                document
            }
        });
        console.log(customer);
        res.status(201);
        return res.json(customer);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error})
    }

});

routes.put("/customers/:id", async (req, res) => {
    try {
        const {name, email, document} = req.body;
        
        const id = req.params.id;
        const customer = await prisma.customers.findUnique({
            where: {id}
        });

        if (customer == null) {
            return res.status(404).json();
        }

        customer.name = name;
        customer.email = email;
        customer.document = document;

        const customerUpdated = await prisma.customers.update({
            where: {id},
            data: customer
        });
        console.log(customer);
        res.status(201);
        return res.json(customer);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error})
    }
});

routes.delete("/customers/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const customer = await prisma.customers.findUnique({
            where: {id}
        });

        if (customer == null) {
            return res.status(404).json();
        }

        await prisma.customers.delete({
            where: {id}
        });
        return res.status(204).json();
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error});
    }
});

export { routes }