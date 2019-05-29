export class Exame {
  constructor(
    public protocolo_exame: string = "",
    public data_do_exame: string = "",
    public hora_do_exame: string = "",
    public resultado: string = "",
    public tipo: string = "",
    public crm: string = "",
    public cpf: string = "",
    public data_da_consulta: string = "",
    public protocolo_internacao: string = "",
    public protocolo_atendimento: string = ""
  ){}
}
