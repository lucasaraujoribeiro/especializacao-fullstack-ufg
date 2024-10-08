import { NextFunction, Request, Response } from "express";
import { prisma } from "../prisma";
import { compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

type TokenPayload = {
    id: string;
    iat: number;
    exp: number;
}

class AuthController {
    
    async autenticate(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            const user = await prisma.user.findUnique({
                where: {email}
            });

            if (!user) {
                return res.status(400).json({error: "User or password invalid."});
            }

            const isValuePassWord = await compare(password, user.password);

            if (!isValuePassWord) {
                return res.status(400).json({error: "User or password invalid."});
            }

            const token = sign({ id: user.id, email: user.email}, "secret", {expiresIn: "1m"});

            return res.status(200).json({user: {id: user.id, email}, token})
        } catch (error) {
            return res.status(500).json({error: 'Error autenticate.'});
        }
    }

    async authMiddleware(req: Request, res: Response, next: NextFunction) {
        try {
            const { authorization } = req.headers;
            
            if (!authorization) {
                return res.status(401).json({error: "Token not provide."})
            }
    
            const [, token] = authorization.split(" ");

            const decoded = verify(token, "secret");

            const { id } = decoded as TokenPayload;

            console.log(`==========> Id: ${id}`);
            
            return next();
        } catch (error) {
            return res.status(401).json({error: 'Token invalid.'});
        }
    }
}

export { AuthController }