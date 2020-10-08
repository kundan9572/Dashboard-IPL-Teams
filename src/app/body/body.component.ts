import { Component, OnInit } from '@angular/core';
import {team} from '../team';
import { contacts} from '../teams'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }
  player: team[];

  ngOnInit(): void {
    this.player = contacts;
  }

}
