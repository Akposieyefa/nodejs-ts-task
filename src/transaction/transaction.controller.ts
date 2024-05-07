import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { TransactionService } from 'src/services/transaction.service';
import { AuthGuard } from '../auth/auth.guard';
// import { UsersService } from 'src/services/users.service';

@Controller('transaction')
export class TransactionController {

    constructor(
        private transactionService: TransactionService
    ) {}
    
   @UseGuards(AuthGuard)
    @Post('/create')
    async createTransaction(@Body() transactionData) {
        return await this.transactionService.create(transactionData)
    }
}
