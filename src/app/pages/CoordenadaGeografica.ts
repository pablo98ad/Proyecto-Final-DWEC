import { TouchSequence } from 'selenium-webdriver';

export class CoodenadaGeografica{
  private latitud:number;
  private longitud:number;

  constructor(lat:number,long:number){
    this.latitud=lat;
    this.longitud=long;
  }

  getLatitud():number{
    return this.latitud;
  }

  getLongitud():number{
    return this.longitud
  }

  toSexagesimalLatitud (){
    let latSexagesimal= new Map();
    let grados=Math.trunc(this.latitud);
    let minutos=Math.trunc((this.latitud-grados)*60);
    let segundos=parseFloat(((minutos-(this.latitud-grados)*60)*60).toFixed(3));
    let puntoCardinal;
    if(this.latitud>0){
      puntoCardinal='N';
    }else{
      puntoCardinal='S';
    }
    latSexagesimal.set('grados',Math.abs(grados));
    latSexagesimal.set('minutos',Math.abs(minutos));
    latSexagesimal.set('segundos',Math.abs(segundos));
    latSexagesimal.set('puntoCardinal',puntoCardinal);

    return latSexagesimal;
  }

  toSexagesimalLongitud(){
    let longSexagesimal= new Map();
    let grados=Math.trunc(this.longitud);
    let minutos=Math.trunc((this.longitud-grados)*60);
    let segundos=parseFloat(((minutos-(this.longitud-grados)*60)*60).toFixed(3));
    let puntoCardinal;
    if(this.longitud>0){
      puntoCardinal='E';
    }else{
      puntoCardinal='O';
    }
    longSexagesimal.set('grados',Math.abs(grados));
    longSexagesimal.set('minutos',Math.abs(minutos));
    longSexagesimal.set('segundos',Math.abs(segundos));
    longSexagesimal.set('puntoCardinal',puntoCardinal);

    return longSexagesimal;
  }

  toString():String{
    return `[${this.latitud},${this.longitud}]`;
  }

  calcularDistancia (punto:CoodenadaGeografica):number{
    let distancia:number=0;
    let radioTierra=6378.137;
    let rad = x => x*Math.PI/180

    let diferenciaLat=rad(this.latitud-punto.getLatitud());
    let diferenciaLong=rad(this.longitud-punto.getLongitud());

    var a = Math.sin(diferenciaLat/2) * Math.sin(diferenciaLat/2) +
    Math.cos(rad(this.latitud)) * Math.cos(rad(punto.latitud)) * Math.sin(diferenciaLong/2) * Math.sin(diferenciaLong/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    distancia = radioTierra * c;


    return distancia;
  }


}
