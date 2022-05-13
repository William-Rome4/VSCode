import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  public grade = 7;

  public products = [
    {"name": "water", "price": 2},
    {"name": "milk", "price": 5},
    {"name": "bread", "price": 6}
  ];

  public status = "preparing";
}