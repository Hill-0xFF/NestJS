import { IsNumber } from 'class-validator';

export class getBarberParam {
  @IsNumber(
    { allowNaN: false, maxDecimalPlaces: 3 },
    {
      message: `Parâmetro deve ser um número!`,
    }
  )
  id: number;
}
