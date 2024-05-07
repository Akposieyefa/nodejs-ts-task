import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersService } from 'src/services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UsersService],
  exports : [UsersService]
})
export class UserModule {}
