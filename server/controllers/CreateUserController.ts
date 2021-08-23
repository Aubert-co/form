import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
    static handle(arg0: string, handle: any) {
        throw new Error('Method not implemented.');
    }

    async handle(request: Request, response: Response) {
        const { name, email} = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name, email});
        
        console.log(name,"deu tudo certo");
        return response.json(user);
    }
}

export { CreateUserController }
