import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


//importacion del router para movernos a la pagina

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
// con esto dispara la clase del servicio de heroes services ya que en el constructor esta llamando la clase del servicio
  constructor( private heroesService: HeroesService,
               private router:Router
               ) {}

  heroes:Heroe[]=[];
  //primero se ejecuta el constructor y luego el ngOnInit
  //en el arreglo heroes le setea lo que devuelve la funcion de heroes en el ts de servicio
  ngOnInit(): void {  
      this.heroes = this.heroesService.getHeroes();
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe', idx]);
  }

}


