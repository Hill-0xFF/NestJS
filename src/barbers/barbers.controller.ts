import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { BarbersService } from './barbers.service';
import { CreateBarbersDTO } from './dto/create-barber.dto';
import { Response } from 'express';

@Controller('barbers')
export class BarbersController {
  constructor(private readonly barbersService: BarbersService) {}

  @Post()
  create(@Body() createBarber: CreateBarbersDTO, @Res() res: Response) {
    const barber = this.barbersService.create(createBarber);
    if (!barber) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: `Não foi possível adicionar novo barbeiro!` });
    }

    return res.status(HttpStatus.OK).json({ message: `Novo barbeiro criado!` });
  }
}
