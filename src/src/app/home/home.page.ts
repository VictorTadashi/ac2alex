import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public tostcontroller : ToastController
  ) {}

  inicial = 0;
  km=0;
  final=0;
  app=0;
  cliente=0;
  kmRodado='';
  plano='';

  calcular(){
    if(this.plano === 'Normal'){
      this.inicial = 5
      this.km = 2.5
      this.final = this.inicial + (this.km * parseFloat(this.kmRodado))
      if(this.final <= 150){
        this.app = this.final * 0.75
        this.cliente = this.final * 0.25
        alert('O valor final é de R$'+this.final+' do aplicativo é de R$'+this.app+' e o valor do cliente é de R$'+this.cliente)
      }
      else{
        this.app = this.final * 0.80
        this.cliente = this.final * 0.20
        alert('O valor final é de R$'+this.final+' do aplicativo é de R$'+this.app+' e o valor do cliente é de R$'+this.cliente)
      }
    }
    else if(this.plano === 'Superior'){
      this.inicial = 7.5
      this.km = 3.5
      this.final = this.inicial + (this.km * parseFloat(this.kmRodado))
      if(this.final <= 150){
        this.app = this.final * 0.75
        this.cliente = this.final * 0.25
        alert('O valor final é de R$'+this.final+' do aplicativo é de R$'+this.app+' e o valor do cliente é de R$'+this.cliente)
      }
      else{
        this.app = this.final * 0.80
        this.cliente = this.final * 0.20
        alert('O valor final é de R$'+this.final+' do aplicativo é de R$'+this.app+' e o valor do cliente é de R$'+this.cliente)
      }
    }
    else if(this.plano === 'VIP'){
      this.inicial = 10
      this.km = 5.5
      this.final = this.inicial + (this.km * parseFloat(this.kmRodado))
      if(this.final <= 150){
        this.app = this.final * 0.75
        this.cliente = this.final * 0.25
        alert('O valor final é de R$'+this.final+' do aplicativo é de R$'+this.app+' e o valor do cliente é de R$'+this.cliente)
      }
      else{
        this.app = this.final * 0.80
        this.cliente = this.final * 0.20
        alert('O valor final é de R$'+this.final+' do aplicativo é de R$'+this.app+' e o valor do cliente é de R$'+this.cliente)
      }

    }
  }

  ppl=""
  km2=""
  combustivel=''
  res=0

  calcular2(){

    if (this.combustivel == 'etanol') {
      this.res = parseFloat(this.ppl) * parseFloat(this.km2) / 9;
    }
    else if (this.combustivel == 'gasolina') {
      this.res = parseFloat(this.ppl) * parseFloat(this.km2) / 12;
    }
    else if (this.combustivel == 'diesel') {
      this.res = parseFloat(this.ppl) * parseFloat(this.km2) / 15
    }
    this.exibirToast()
    }

    async exibirToast(){
      const toast = await this.tostcontroller.create({
        message: `O valor a pagar pelo combustível é de R$${this.res.toFixed(1)}`
      })
      await toast.present();
    }

  }


