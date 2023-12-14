import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { BarbersService } from './barbers.service';
import { CreateBarbersDTO } from './dto/create-barber.dto';
import { Response } from 'express';
import { GetBarberParamDTO } from './dto/get-barber.dto';

@Controller('barbers')
export class BarbersController {
  constructor(private readonly barbersService: BarbersService) {}

  @Post()
  async create(@Body() createBarber: CreateBarbersDTO, @Res() res: Response) {
    const exists = await this.barbersService.findBarberEmail(
      createBarber.email
    );

    if (exists) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: `Barbeiro já cadastrado!` });
    }

    const barber = await this.barbersService.create(createBarber);

    if (!barber) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: `Não foi possível adicionar novo barbeiro!` });
    }

    return res
      .status(HttpStatus.CREATED)
      .json({ message: `Novo barbeiro criado!` });
  }

  @Get()
  async getBarbers(@Res() res: Response) {
    const barbers = await this.barbersService.findAllBarbers();
    if (!barbers.length) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: `Não há barbeiros cadastrados!` });
    }

    return res.status(HttpStatus.OK).json({ barbers });
  }

  @Get(':id')
  async getBarber(@Param('id') id: number, @Res() res: Response) {
    const barber = await this.barbersService.fineOneBarber(Number(id));
    if (!barber) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: `Barbeiro não encontrado!` });
    }

    return res.status(HttpStatus.OK).json({ barber });
  }
}
