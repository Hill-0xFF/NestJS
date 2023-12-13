import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateBarbersDTO } from 'src/barbers/dto/create-barber.dto';
import { Barber } from './entities/barber.entity';

@Injectable()
export class BarbersService {
  constructor(private prisma: PrismaService) {}

  async create(createBarberDto: CreateBarbersDTO): Promise<string | null> {
    return `Adicionado barbeiro!`;
  }
}
