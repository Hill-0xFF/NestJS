import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { BarbersService } from './barbers.service';
import { CreateBarbersDTO } from './dto/create-barber.dto';
import { Response } from 'express';

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
}
