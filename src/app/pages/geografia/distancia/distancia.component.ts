import { Component, OnInit } from '@angular/core';
import { LocalidadesService } from '../localidades.service';

@Component({
  selector: 'ap-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent implements OnInit {

  distanciaARefencia:string;
  coordenadasSeleccionadas:String;
  localidadSeleccionada:string;

  constructor(public localidadesS: LocalidadesService) {
    this.localidadSeleccionada='';
    this.coordenadasSeleccionadas='';
    this.distanciaARefencia='';
   }

  ngOnInit(): void {
  }

  ponerCoordenadas(localidad:string):void{
    this.coordenadasSeleccionadas= `${localidad} ${this.localidadesS.localidades.get(localidad).toString()} `;
  }


  calcularDistancia(e:any,localidad:string):void{
    //para cuando hagamos click en uno, se quite la clase conClick en el anterior
    let seleccionados=document.querySelectorAll(".conClick");
    //console.log(seleccionados);
    for (let i=0;i<seleccionados.length;i++){
      seleccionados[i].classList.remove('conClick');
    }
    //y se la añadamos al que hemos hecho click ahora
    e.target.classList.add("conClick");

    let referencia= this.localidadesS.localidades.get('Almansa');
    let seleccionado= this.localidadesS.localidades.get(localidad);
    this.distanciaARefencia= `${referencia.calcularDistancia(seleccionado).toFixed(2)} Kilometros`;
    this.localidadSeleccionada=localidad;

  }

  resetearCoordenadas():void{
    this.coordenadasSeleccionadas='';
  }
  resetearDistancia():void{
    this.distanciaARefencia='';
  }

}
