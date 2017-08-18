import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { DadosProjeto } from './dados-projeto';

@Injectable()
export class AceleratoGoService {

  private url = '/api/projeto';

  constructor(private http: Http) { }

  getQuadroGeral() {
    return this.http.get(this.url)
      .map(res => {
        return res.json();
      });
  }

  getQuadroTeste() {
    return this.http.get(this.url + '/teste')
      .map(res => {
        return res.json();
      });
  }

}
