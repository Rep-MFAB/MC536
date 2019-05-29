export class Paciente {
  constructor(
    public cpf: string = "",
    public data_de_nascimento: string = "",
    public email: string = "",
    public nome: string = "",
    public telefone: string = "",
    public tipo_sanguineo: string = "",
    public sexo: string = ""
  ){}
}
