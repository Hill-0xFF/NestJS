import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateBarbersDTO } from './dto/create-barber.dto';
import { GetBarberParamDTO } from './dto/get-barber.dto';

@Injectable()
export class BarbersService {
  constructor(private prisma: PrismaService) {}

  async findBarberEmail(email: string) {
    const barber = await this.prisma.adminTier1.findFirst({
      where: { email: email },
    });
    // console.log(barber);
    return barber;
  }

  async findAllBarbers() {
    return await this.prisma.adminTier1.findMany();
  }

  async fineOneBarber(id: number) {
    return await this.prisma.adminTier1.findFirst({
      where: { id: id },
    });
  }

  async create(data: CreateBarbersDTO) {
    return await this.prisma.adminTier1.create({
      data,
    });
  }
}
