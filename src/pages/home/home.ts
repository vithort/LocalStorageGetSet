import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  inputtext: string;
  key: string = 'username';
  key2: string = 'items';
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  items: any = [];

  constructor(
    public navCtrl: NavController
    ,private storage: Storage
    ,public http: HttpClient
  ) {

  }

  getData() {
    let data: Observable<any> = this.http.get(this.url);
    data.subscribe(result => {
      this.items = result;
    })
  }

  saveData() {
    this.storage.set(this.key, this.inputtext);
  }

  saveData2() {
    this.storage.set(this.key, JSON.stringify(this.items));
  }

  loadData() {
    this.storage.get(this.key).then((val) => {
      console.log('Your username is: ', val);
    });
  }

  loadData2() {
    this.storage.get(this.key).then((val) => {
      if (val != null && val != undefined) {
        this.items = JSON.parse(val);
      }
    });
  }

}
