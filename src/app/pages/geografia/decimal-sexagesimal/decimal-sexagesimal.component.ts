import { Component, OnInit } from '@angular/core';
import { CoodenadaGeografica } from '../CoordenadaGeografica'
import { Sexagesimal } from '../sexagesimal';

@Component({
  selector: 'ap-decimal-sexagesimal',
  templateUrl: './decimal-sexagesimal.component.html',
  styleUrls: ['./decimal-sexagesimal.component.css']
})
export class DecimalSexagesimalComponent implements OnInit {

  coordenadaAzar:CoodenadaGeografica;
  latSexagesimalUser:Sexagesimal;//interfaz
  longSexagesimalUser:Sexagesimal;//interfaz
  resultado:string;

  constructor() {
    this.resultado='';
   }

  ngOnInit(): void {
    this.coordenadaAzar=this.generarCoordenadaAleatoria();
    this.latSexagesimalUser={
      'grados':0,
      'minutos':0,
      'segundos':0,
      'puntoCardinal':''
    }
    this.longSexagesimalUser={
      'grados':0,
      'minutos':0,
      'segundos':0,
      'puntoCardinal':''
    }
  }


  evaluarRespuesta(): void{
    let sexagesimalLong:Sexagesimal= this.coordenadaAzar.toSexagesimalLongitud();
    let sexagesimalLat:Sexagesimal= this.coordenadaAzar.toSexagesimalLatitud();
    this.resultado='Fallo';

    if(this.longSexagesimalUser.grados==sexagesimalLong.grados && this.longSexagesimalUser.minutos==sexagesimalLong.minutos){
      if(this.longSexagesimalUser.segundos==sexagesimalLong.segundos && this.longSexagesimalUser.puntoCardinal.toLowerCase()==sexagesimalLong.puntoCardinal.toLowerCase()){
        if(this.latSexagesimalUser.grados==sexagesimalLat.grados && this.latSexagesimalUser.minutos==sexagesimalLat.minutos){
          if(this.latSexagesimalUser.segundos==sexagesimalLat.segundos && this.latSexagesimalUser.puntoCardinal.toLowerCase()==sexagesimalLat.puntoCardinal.toLowerCase()){
            this.resultado='Acierto';
          }
        }
      }
    }
  }

  private generarCoordenadaAleatoria():CoodenadaGeografica{
    let lat:number=parseFloat((Math.random()*91).toFixed(7));
    let long:number=parseFloat((Math.random()*181).toFixed(7));;

    let posONegLa:number= Math.trunc(Math.random()*2);
    if(posONegLa==1){
      lat=lat*-1;
    }

    let posONeglo:number= Math.trunc(Math.random()*2);
    if(posONeglo==1){
      long=long*-1;
    }

    return new CoodenadaGeografica(lat,long);
  }



  seleccionarAlClick(e:any):void{
    e.target.select();
   // console.log(e.target);<3
  }

}
