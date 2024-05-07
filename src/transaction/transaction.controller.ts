import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { TransactionService } from 'src/services/transaction.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('transaction')
export class TransactionController {

    constructor(
        private transactionService: TransactionService, 
    ) {}
    
    @UseGuards(AuthGuard)
    @Post('/create')
    async createTransaction(@Body() transactionData, @Req() req) {
        console.log("user", req.user.sub)
        transactionData.user = req.user.sub
        return await this.transactionService.create(transactionData)
    }

    @UseGuards(AuthGuard)
    @Get('/user/transactions')
    async getUserTransaction(@Req() req)  {
        return await this.transactionService.findByUserId(req.user.sub)
    }
    
}
