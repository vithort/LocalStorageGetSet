import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  inputtext: string;
  key: string = 'username';

  constructor(
    public navCtrl: NavController
    ,private storage: Storage
  ) {

  }

  saveData() {
    this.storage.set(this.key, this.inputtext);
  }

  loadData() {
    this.storage.get(this.key).then((val) => {
      console.log('Your username is: ', val);
    });
  }

}
