import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService : HeroesService, 
              private _roter : Router
             ) { 
    console.log("Constructor de heroes");
  }

  ngOnInit() {
    console.log("OnInit de heroes");

    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(idx:number){
    console.log(idx);
    this._roter.navigate(['/heroe', idx]);
  }

}