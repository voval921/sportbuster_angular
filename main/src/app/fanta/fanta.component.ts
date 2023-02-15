import { Component, OnInit } from '@angular/core';
import {FantaService} from "./fanta.service";

@Component({
  selector: 'app-fanta',
  templateUrl: './fanta.component.html'
})
export class FantaComponent implements OnInit {

  private userFantaGames: []

  constructor(private fantaService: FantaService) {
    this.userFantaGames = null;//TODO
  }

  ngOnInit() {
  }

}
