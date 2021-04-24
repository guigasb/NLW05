import { getCustomRepository, Repository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { User } from "../entities/User";


class UsersService {
    private usersRepository: Repository<User>

    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({ email });

        return user;
    }

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }
    async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository);

        // verificar se o usuário existe

        const userExist = await this.usersRepository.findOne({
            email
        });

        //se existir, retornar users
        if (userExist) {
            return userExist;
        }

        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);

        //se não existir, salvar no DB
        return user;
    }
}
export { UsersService };