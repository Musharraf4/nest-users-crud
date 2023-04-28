import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './data/users.dto';

@Controller('users/')
export class UsersController {
  constructor(private userService: UserService) {}

  // add new user
  @Post('add-user')
  addUser(@Body() user: User): string {
    return this.userService.addUser(user);
  }

  //get all users
  @Get('get-users')
  getAllUsers(): User[] {
    return this.userService.getAllUsers();
  }

  //get single user
  @Get('get-users/:userId')
  getUser(@Param() params): string {
    return this.userService.getUser(params.userId);
  }

  @Delete('delete-user/:userId')
  deleteUser(@Param('userId') userId: string): string {
    return this.userService.deleteUser(userId);
  }
  @Put('update-user')
  updateUser(@Body() user: User): string {
    return this.userService.updateUser(user);
  }
}
