import { Component, OnInit } from '@angular/core';
import {Item} from "../../Models/item";

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit {

  items:Item[];

  constructor() {
    this.items = [
      {
        name : 'Another Brick in the Wall',
        artist : 'Pink Floyd'
      },
      {
        name : 'People are Strange',
        artist : 'The Doors'
      }
    ]
  }

  ngOnInit() {
  }

}
