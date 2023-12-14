import { IsNumber } from 'class-validator';

export class GetBarberParamDTO {
  @IsNumber(
    {},
    {
      message: `Parâmetro deve ser um número!`,
    }
  )
  id: number;
}
