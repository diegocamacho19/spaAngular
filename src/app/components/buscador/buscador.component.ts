import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HeroesService, Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[]=[];
  termino:string="";

  constructor( private activatedRoute:ActivatedRoute, 
               private heroesService:HeroesService,
               private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{  
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroes(this.termino);;
    })
  }
  verHeroe(idx?:number){
    this.router.navigate(['/heroe', idx]);
  }


}
