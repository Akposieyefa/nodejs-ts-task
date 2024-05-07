import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from 'src/services/transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from 'src/entity/transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction])],
  controllers: [TransactionController],
  providers: [TransactionService]
})
export class TransactionModule {
  
}
