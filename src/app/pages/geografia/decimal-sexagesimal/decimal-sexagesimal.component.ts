import { Component, OnInit } from '@angular/core';
import { CoodenadaGeografica } from '../CoordenadaGeografica'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'ap-decimal-sexagesimal',
  templateUrl: './decimal-sexagesimal.component.html',
  styleUrls: ['./decimal-sexagesimal.component.css']
})
export class DecimalSexagesimalComponent implements OnInit {

  coordenadaAzar:CoodenadaGeografica;
  gradosLongUser:number;
  minutosLongUser:number;
  segundosLongUser:number;
  puntoCardinalLongUser:string;
  gradosLatUser:number;
  minutosLatUser:number;
  segundosLatUser:number;
  puntoCardinalLatUser:string;

  resultado:string;
  constructor() {

   }

  ngOnInit(): void {
    this.coordenadaAzar=this.generarCoordenadaAleatoria();
  }


  evaluarRespuesta(): void{
    let sexagesimalLong= this.coordenadaAzar.toSexagesimalLongitud();
    let sexagesimalLat= this.coordenadaAzar.toSexagesimalLatitud();
    this.resultado='Fallo';
    //alert(this.puntoCardinalLatUser);

    if(this.gradosLongUser==sexagesimalLong.get('grados') && this.minutosLongUser==sexagesimalLong.get('minutos')){
      if(this.segundosLongUser==sexagesimalLong.get('segundos') && this.puntoCardinalLongUser==sexagesimalLong.get('puntoCardinal')){
        if(this.gradosLatUser==sexagesimalLat.get('grados') && this.minutosLatUser==sexagesimalLat.get('minutos')){
          if(this.segundosLatUser==sexagesimalLat.get('segundos') && this.puntoCardinalLatUser==sexagesimalLat.get('puntoCardinal')){
            this.resultado='Acierto';
          }
        }
      }
    }


  }
  generarCoordenadaAleatoria(){
    let lat=parseFloat((Math.random()*91).toFixed(7));
    let long=parseFloat((Math.random()*181).toFixed(7));;

    let posONegLa= Math.trunc(Math.random()*2);
    if(posONegLa==1){
      lat=lat*-1;
    }

    let posONeglo= Math.trunc(Math.random()*2);
    if(posONeglo==1){
      long=long*-1;
    }

    return new CoodenadaGeografica(lat,long);
  }

}
