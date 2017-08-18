import { Component, OnInit } from '@angular/core';

import { AceleratoGoService } from './../acelerato-go.service';
import { DadosProjeto } from './../dados-projeto';

@Component({
  selector: 'app-quadro-teste',
  templateUrl: './quadro-teste.component.html',
  styleUrls: ['./quadro-teste.component.css']
})
export class QuadroTesteComponent implements OnInit {

  public dadosProjetos: DadosProjeto[] = [];

  constructor(private aceleratoGoService: AceleratoGoService) { }

  ngOnInit() {
    this.aceleratoGoService.getQuadroTeste()
      .subscribe(data => {
        this.dadosProjetos = data;
        this.dadosProjetos.sort((a, b) => {
          if (a.projeto.grupo === b.projeto.grupo) {
            return 0;
          }
          if (a.projeto.grupo < b.projeto.grupo) {
            return -1;
          }
          if (a.projeto.grupo > b.projeto.grupo) {
            return 1;
          }
        });
      });
  }

  getTotal(dadosProjeto: DadosProjeto) {
    return dadosProjeto.agAprovacao.qtdMelhoria + dadosProjeto.aprovado.qtdMelhoria + dadosProjeto.emDesenvolvimento.qtdMelhoria
      + dadosProjeto.agAprovacao.qtdProblema + dadosProjeto.aprovado.qtdProblema + dadosProjeto.emDesenvolvimento.qtdProblema;
  }

}
