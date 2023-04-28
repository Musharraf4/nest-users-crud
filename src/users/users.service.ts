import { Injectable } from '@nestjs/common';
import { User } from './data/users.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  public users: User[] = [];

  //add user
  addUser(userData: User): string {
    userData.id = uuidv4();
    this.users.push(userData);
    return 'user added successfully';
  }

  //update user
  updateUser(userData: User): string {
    let userIndex = this.users.findIndex((currentUser) => {
      return currentUser.id === userData.id;
    });
    this.users[userIndex] = userData;
    return 'user updated successfully';
  }

  //get all users
  getAllUsers(): User[] {
    return this.users;
  }

  getUser(userId: string): string {
    return `get single user id# ${userId}`;
  }

  //deleted user
  deleteUser(userId: string): string {
    this.users = this.users.filter((user) => {
      return user.id !== userId;
    });
    return 'user deleted';
  }
}
