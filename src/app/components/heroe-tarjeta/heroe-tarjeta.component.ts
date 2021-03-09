import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
//el input me dice que una propiedad va a ser recibida desde afuera
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  //le llega la informacion de heroes.component.html de la etique y el @input dice que le llega informacion de afuera
  @Input() heroe:any=[];
  @Input() idx?:number=0;

  //esto es para llamar desde el componente hijo una funcion del componente padre que en este caso seria buscador.component y heroes.component
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router:Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {

  }

  verHeroe(){
    //this.router.navigate(['/heroe', this.idx]);
    console.log(this.heroe);
    console.log(this.idx);

    this.heroeSeleccionado.emit(this.idx);
  }

}
