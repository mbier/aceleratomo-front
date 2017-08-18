import { Component, OnInit } from '@angular/core';

import { AceleratoGoService } from './../acelerato-go.service';
import { DadosProjeto } from './../dados-projeto';

@Component({
  selector: 'app-quadro-geral',
  templateUrl: './quadro-geral.component.html',
  styleUrls: ['./quadro-geral.component.css']
})
export class QuadroGeralComponent implements OnInit {

  public dadosProjetos: DadosProjeto[] = [];

  private chartData: any[] = [];

  constructor(private aceleratoGoService: AceleratoGoService) { }

  ngOnInit() {
    this.aceleratoGoService.getQuadroGeral()
      .subscribe(data => {
        this.dadosProjetos = data;
        this.dadosProjetos.forEach(dp => {
          this.generateChart(dp);
        });
      });
  }

  generateChart(dadosProjeto: DadosProjeto) {
    dadosProjeto.chartData = [];

    if (dadosProjeto.agAprovacao.qtdMelhoria + dadosProjeto.agAprovacao.qtdProblema > 0) {
      dadosProjeto.chartData.push({ 'name': 'Ag Aprovação', 'value': dadosProjeto.agAprovacao.qtdMelhoria + dadosProjeto.agAprovacao.qtdProblema });
    }
    if (dadosProjeto.aprovado.qtdMelhoria + dadosProjeto.aprovado.qtdProblema > 0) {
      dadosProjeto.chartData.push({ 'name': 'Aprovado', 'value': dadosProjeto.aprovado.qtdMelhoria + dadosProjeto.aprovado.qtdProblema });
    }
    if (dadosProjeto.emDesenvolvimento.qtdMelhoria + dadosProjeto.emDesenvolvimento.qtdProblema > 0) {
      dadosProjeto.chartData.push({ 'name': 'Em Desenvolvimento', 'value': dadosProjeto.emDesenvolvimento.qtdMelhoria + dadosProjeto.emDesenvolvimento.qtdProblema });
    }
    if (dadosProjeto.agMerge.qtdMelhoria + dadosProjeto.agMerge.qtdProblema > 0) {
      dadosProjeto.chartData.push({ 'name': 'Ag Merge', 'value': dadosProjeto.agMerge.qtdMelhoria + dadosProjeto.agMerge.qtdProblema });
    }
    if (dadosProjeto.agTeste.qtdMelhoria + dadosProjeto.agTeste.qtdProblema > 0) {
      dadosProjeto.chartData.push({ 'name': 'Ag Teste', 'value': dadosProjeto.agTeste.qtdMelhoria + dadosProjeto.agTeste.qtdProblema });
    }
    if (dadosProjeto.emTeste.qtdMelhoria + dadosProjeto.emTeste.qtdProblema > 0) {
      dadosProjeto.chartData.push({ 'name': 'Em Teste', 'value': dadosProjeto.emTeste.qtdMelhoria + dadosProjeto.emTeste.qtdProblema });
    }
    if (dadosProjeto.recusado.qtdMelhoria + dadosProjeto.recusado.qtdProblema > 0) {
      dadosProjeto.chartData.push({ 'name': 'Recusado', 'value': dadosProjeto.recusado.qtdMelhoria + dadosProjeto.recusado.qtdProblema });
    }
    if (dadosProjeto.qtdImpedimento > 0) {
      dadosProjeto.chartData.push({ 'name': 'Impedimento', 'value': dadosProjeto.qtdImpedimento });
    }
  }

  getTotal(dadosProjeto: DadosProjeto) {
    return dadosProjeto.agAprovacao.qtdMelhoria + dadosProjeto.aprovado.qtdMelhoria + dadosProjeto.emDesenvolvimento.qtdMelhoria + dadosProjeto.recusado.qtdMelhoria
      + dadosProjeto.agAprovacao.qtdProblema + dadosProjeto.aprovado.qtdProblema + dadosProjeto.emDesenvolvimento.qtdProblema + dadosProjeto.recusado.qtdProblema;
  }

}
