import { IsNotEmpty, IsAlphanumeric, IsEmail, Length } from 'class-validator';
export class CreateBarbersDTO {
  // Data Transfer Object
  @IsNotEmpty({
    message: `Campo 'nome' é obrigatório!`,
  })
  @IsAlphanumeric('pt-BR', {
    message: `Campo 'nome' deve ser alfanumérico!`,
  })
  @Length(3, 30, {
    message: `Campo 'nome' com caracteres insuficientes!`,
  })
  name: string;

  @IsNotEmpty({
    message: `Campo 'email' é obrigatório!`,
  })
  @IsEmail(
    {
      domain_specific_validation: true,
      require_tld: true,
    },
    { message: `Campo 'email' não é válido!` }
  )
  email: string;
}
