import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from '../entity/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {}

  async create(entityData: Partial<Transaction>): Promise<Transaction> {
    const transactionData = this.transactionRepository.create(entityData);
    return this.transactionRepository.save(transactionData);
  }
  
  findAll(): Promise<Transaction[]> {
    return this.transactionRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.transactionRepository.delete(id);
  }
  
}