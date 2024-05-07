import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from '../entity/transaction.entity';
import { User } from 'src/entity/user.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {}

  async create(entityData: Transaction): Promise<Transaction> {
    console.log(entityData)
    const transactionData = this.transactionRepository.create(entityData);
    return this.transactionRepository.save(transactionData);
  }
  
  findAll(): Promise<Transaction[]> {
    return this.transactionRepository.find();
  }

  findByUserId(userId: number): Promise<Transaction[]> {
    return this.transactionRepository.find({ where: {user : { id: userId } }});
  }

  async remove(id: number): Promise<void> {
    await this.transactionRepository.delete(id);
  }
  
}