import { TouchSequence } from 'selenium-webdriver';
import { Sexagesimal } from './sexagesimal';

export class CoodenadaGeografica{
  private latitud:number;
  private longitud:number;

  constructor(lat:number,long:number){
    /*if(lat>90 || lat<-90 || long>180 || long<-180){
      throw new Exception('Los valores pasados por parametro no son equivalentes a una coordenada');
    }-->no se hacen asi las excepciones en typescript*/
    this.latitud=lat;
    this.longitud=long;
  }

  getLatitud():number{
    return this.latitud;
  }

  getLongitud():number{
    return this.longitud
  }

  toSexagesimalLatitud():Sexagesimal{
    let latSexagesimal:Sexagesimal;
    let grados=Math.trunc(this.latitud);
    let minutos=Math.trunc((this.latitud-grados)*60);
    let segundos=parseFloat(((minutos-(this.latitud-grados)*60)*60).toFixed(2));
    let puntoCardinal;
    if(this.latitud>0){
      puntoCardinal='N';
    }else{
      puntoCardinal='S';
    }
    latSexagesimal= {
      'grados':Math.abs(grados),
      'minutos':Math.abs(minutos),
      'segundos':Math.abs(segundos),
      'puntoCardinal':puntoCardinal
    }

    return latSexagesimal;//devolver objeto literal - con interfaz
  }

  toSexagesimalLongitud():Sexagesimal{
    let longSexagesimal:Sexagesimal;
    let grados=Math.trunc(this.longitud);
    let minutos=Math.trunc((this.longitud-grados)*60);
    let segundos=parseFloat(((minutos-(this.longitud-grados)*60)*60).toFixed(2));
    let puntoCardinal;
    if(this.longitud>0){
      puntoCardinal='E';
    }else{
      puntoCardinal='O';
    }
    longSexagesimal= {
      'grados':Math.abs(grados),
      'minutos':Math.abs(minutos),
      'segundos':Math.abs(segundos),
      'puntoCardinal':puntoCardinal
    }
    return longSexagesimal;
  }

  toString():String{
    return `[${this.latitud},${this.longitud}]`;
  }

  calcularDistancia (punto:CoodenadaGeografica):number{//implementar la formula del enunciado
    let distancia:number=0;
    let radioTierra=6378.137;
    let rad = x => x*Math.PI/180

    let diferenciaLat=rad(this.latitud-punto.getLatitud());
    let diferenciaLong=rad(this.longitud-punto.getLongitud());

    let a = Math.sin(diferenciaLat/2) * Math.sin(diferenciaLat/2) +
    Math.cos(rad(this.latitud)) * Math.cos(rad(punto.latitud)) * Math.sin(diferenciaLong/2) * Math.sin(diferenciaLong/2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    distancia = radioTierra * c;

    return distancia;
  }


}
