import { Repository } from 'typeorm';
import IUsers from '../../../features/users/interface/UsersInterface';
import DatabaseConnection from '../connections/connections';
import Users from '../entities/Users';

export default class UsersRepository {
   private repository: Repository<Users>;
   constructor() {
      this.repository = DatabaseConnection.getConnection().manager.getRepository(Users);
   }
   async list() {
      return await this.repository.find();
   }
   async create(user: IUsers) {
      await this.repository.insert(user);
   }
}
