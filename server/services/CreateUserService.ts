import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest { //tipo de todos os campos
    name: string;
    email: string;
}

class CreateUserService {

    async execute({ name, email}: IUserRequest) { //descontruio todos os campos
        const usersRepository = getCustomRepository(UsersRepositories);

        // if (!email) { //email é obrigatório
        //     throw new Error("Email incompleto ou incorreto");
        // }

        // const userAlreadyExists = await usersRepository.findOne({ 
        //     email
        // });

        // if (userAlreadyExists) { //existe apenas um email?
        //     throw new Error("Usuário já envio seu currículo")
        // }

        const user = usersRepository.create({
            name,
            email
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService }