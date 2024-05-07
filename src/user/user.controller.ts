import { Body, Controller, Post, Get } from '@nestjs/common';
import { UsersService } from 'src/services/users.service';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {

    constructor(
        private userService: UsersService
    ) {}
    
    @Post('/create')
    async createUser(@Body() userData) {
        const {password} = userData
        const salt = await bcrypt.genSalt();
        const hash = await  bcrypt.hash(password, salt);
        return await this.userService.create(userData)
    }

    @Get('/all')
    async getAll() {
        return await this.userService.findAll();
    }

}
