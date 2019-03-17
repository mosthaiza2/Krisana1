import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  //items = ["Krisana","Nitipong","Sathaporn","Terajeet","Tanatat"];

  items = [
    {"name" : "Krisana","tel" : "0858494472","avatar" : "avatar icon1.png" },
    {"name" : "Tanatat","tel" : "0909404504","avatar" : "avatar icon2.png" },
    {"name" : "Sompot","tel" : "0854231518","avatar" : "avatar icon3.jpg" },
    {"name" : "Nitipong","tel" : "0909523457","avatar" : "avatar icon4.png" },
    {"name" : "Sathaporn","tel" : "0637826654","avatar" : "avatar icon5.png" }
  ];
  itemSelected(item : string){
    console.log("Selected Item : ",item);
  }
  constructor(public navCtrl: NavController) {
  }

}
