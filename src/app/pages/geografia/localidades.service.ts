import { Injectable } from '@angular/core';
import { CoodenadaGeografica } from './CoordenadaGeografica';

@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {
  public localidades: Map<string,CoodenadaGeografica>;

  constructor() {
    this.localidades=new Map();
    this.localidades.set('Almansa',new CoodenadaGeografica(38.8682065,-1.0978627));
    this.localidades.set('Albacete',new CoodenadaGeografica(38.9890121,-1.8548699));
    this.localidades.set('Alicante',new CoodenadaGeografica(38.353738,-0.4901846));
    this.localidades.set('Murcia',new CoodenadaGeografica(37.9923795,-1.1305431));
    this.localidades.set('Valencia',new CoodenadaGeografica(39.4699014,-0.3759513));
    this.localidades.set('Madrid',new CoodenadaGeografica(40.4167047,-3.7035825));
    this.localidades.set('Barcelona',new CoodenadaGeografica(41.3828939,2.1774322));
    this.localidades.set('Yecla',new CoodenadaGeografica(38.6136138,-1.1156761));
  }
}
