import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  heroId : number;
  hero : any = {};
  logoCasa: string;

  constructor(private _activatedRoute : ActivatedRoute, 
              private _heroesService : HeroesService ) { 
      this._activatedRoute.params.subscribe(params => {
        this.heroId = params['id'] ;
        // console.log( this.heroId );
        this.hero = this._heroesService.getHeroe(this.heroId);
        this.logoCasa = this.hero.casa == 'DC' ? "assets/img/DC_Logo.png" : "assets/img/Marvel-Logo.jpg";
        
        console.log(this.hero);
      });
  }

  

}
