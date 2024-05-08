import { Body, Controller, Post, Get, Req } from '@nestjs/common';
import { UsersService } from 'src/services/users.service';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {

    constructor(
        private userService: UsersService
    ) {}
    
    @Post('/create')
    async createUser(@Req() req) {
        try {
            const salt = await bcrypt.genSalt();
            const password = await  bcrypt.hash(req.body.password, salt);
            const userData = {
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                password : password
            }
            return await this.userService.create(userData)
        } catch (error) {
            return {
                message : "Sorry unable to create user",
                error : error,
                success : false
            }
        }
    }

    @Get('/all')
    async getAll() {
        return await this.userService.findAll();
    }

}
