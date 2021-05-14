import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  public ativar_analise = false;
  public ativar_aprovacao = false;
  public ativar_caminho = false;
  public ativar_entregue = false;
  public stepper = 'aprovacao';
  constructor() { }
  
  ngOnInit() {

    switch (this.stepper) {
      case 'analise':
        this.ativar_analise = true;
        break;
      
      case 'aprovacao':
        this.ativar_analise = true;
        this.ativar_aprovacao = true;
        break;
      
      case 'caminho':
        this.ativar_analise = true;
        this.ativar_caminho = true;
        this.ativar_aprovacao = true;
        break;
      
      case 'entregue':
        this.ativar_analise = true;
        this.ativar_caminho = true;
        this.ativar_aprovacao = true;
        this.ativar_entregue = true;
        break;
      
      default:
        break;
    }
  }


}
