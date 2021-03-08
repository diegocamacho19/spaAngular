import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchheroe',
  templateUrl: './searchheroe.component.html'
})
export class SearchheroeComponent implements OnInit {

  constructor(private heroesService: HeroesService,
    private router: Router
  ) { }

  heroes: Heroe[] = [];
  //primero se ejecuta el constructor y luego el ngOnInit
  //en el arreglo heroes le setea lo que devuelve la funcion de heroes en el ts de servicio
  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroesSearch();
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
