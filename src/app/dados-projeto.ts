import { Projeto } from './projeto';
import { CategoriaDado } from './categoria-dado';

export class DadosProjeto {
  projeto: Projeto;
  agAprovacao: CategoriaDado;
  aprovado: CategoriaDado;
  emDesenvolvimento: CategoriaDado;
  agMerge: CategoriaDado;
  qtdImpedimento: number;
  agTeste: CategoriaDado;
  emTeste: CategoriaDado;
  recusado: CategoriaDado;
  chartData: any[];
}
