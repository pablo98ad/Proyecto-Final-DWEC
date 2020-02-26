import { Component, OnInit } from '@angular/core';
import { LocalidadesService } from '../../localidades.service';

@Component({
  selector: 'ap-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent implements OnInit {

  distanciaARefencia:number;

  constructor(public localidadesS: LocalidadesService) {



   }

  ngOnInit(): void {
  }
  calcularDistancia(localidad){

    let referencia= this.localidadesS.localidades.get('Almansa');
    let seleccionado= this.localidadesS.localidades.get(localidad);
    alert(referencia.calcularDistancia(seleccionado));

  }

}
