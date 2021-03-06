import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
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

    return userExists;
  }
}

export { ShowUserProfileUseCase };
