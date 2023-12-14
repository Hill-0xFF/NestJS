import { PartialType } from '@nestjs/mapped-types';
import { CreateBarbersDTO } from './create-barber.dto';

export class UpdateBarber extends PartialType(CreateBarbersDTO) {}
