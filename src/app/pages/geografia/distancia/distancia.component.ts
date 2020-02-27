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



   }

  ngOnInit(): void {
  }

  ponerCoordenadas(localidad){
    this.coordenadasSeleccionadas=this.localidadesS.localidades.get(localidad).toString();
  }


  calcularDistancia(localidad){

    let referencia= this.localidadesS.localidades.get('Almansa');
    let seleccionado= this.localidadesS.localidades.get(localidad);
    this.distanciaARefencia=referencia.calcularDistancia(seleccionado).toFixed(2)+' Kilometros';
    this.localidadSeleccionada=localidad;

  }

}
