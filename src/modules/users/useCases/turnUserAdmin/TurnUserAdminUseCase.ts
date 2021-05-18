import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error("User does not exists!");
    }

    const userEmail = this.usersRepository.findByEmail(userExists.email);

    if (!userEmail) {
      throw new Error("Email does not exists!");
    }

    const userAdmin = this.usersRepository.turnAdmin(userEmail);

    return userAdmin;
  }
}

export { TurnUserAdminUseCase };
