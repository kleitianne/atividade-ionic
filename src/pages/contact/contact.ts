import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { MensagemPage } from '../mensagem/mensagem';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams:NavParams) {

  }
  enviarMensagem(){
    this.navCtrl.push(MensagemPage);
  }

}
