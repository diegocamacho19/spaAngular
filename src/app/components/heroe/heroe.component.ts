import { Component, OnInit } from '@angular/core';

//esto es para recibir el /0 or /1 de heroe de la url
import { ActivatedRoute} from '@angular/router';

import  {HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:any={};

  constructor( private activatedRoute: ActivatedRoute, private heroeService:HeroesService) { 
    this.activatedRoute.params.subscribe(params => {

      //este id es el mismo id que se ejecuta en las rutas. app.routes.ts, coje la ruta el activeRoute
      this.heroe = this.heroeService.getHero(params['id']);
    })
  }

  ngOnInit(): void {
  }

}
