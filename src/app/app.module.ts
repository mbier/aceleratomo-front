import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { QuadroGeralComponent } from './quadro-geral/quadro-geral.component';
import { AceleratoGoService } from './acelerato-go.service';
import { HeaderComponent } from './header/header.component';
import { QuadroTesteComponent } from './quadro-teste/quadro-teste.component';

const appRoutes: Routes = [
  { path: 'quadro-geral', component: QuadroGeralComponent },
  { path: 'quadro-teste', component: QuadroTesteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuadroGeralComponent,
    HeaderComponent,
    QuadroTesteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [AceleratoGoService],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
