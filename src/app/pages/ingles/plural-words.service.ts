import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PluralWordsService {

  private irregularPlurals:Map<string,string>;
  private unchangingWord:string[];

  constructor() {
    this.unchangingWord=[];
    this.rellenarUnchangingWord();
    this.irregularPlurals=new Map();
    this.rellenarIrregularPlurals();
  }

  getPlural(palabra:string):string{
    let plural;
    palabra=palabra.toLowerCase();

    let esNoCambiable=this.estaEnUnchangingWord(palabra);
    if(esNoCambiable!=-1){
      plural=this.unchangingWord[esNoCambiable];

    }else if(this.irregularPlurals.has(palabra)){
      plural=this.irregularPlurals.get(palabra);

    }else if(this.esPluralMasSIS(palabra)){
      plural=`${palabra.substring(0,palabra.length-3)}ses`;

    }else if(this.esPluralMasES(palabra)){
      plural=`${palabra}es`;

    }else if(this.esPluralMasIES(palabra)){
      plural=`${palabra.substring(0,palabra.length-1)}ies`;

    }else if(this.esPluralMasOES(palabra)){
      plural=`${palabra.substring(0,palabra.length-1)}oes`;

    }else{
      plural=`${palabra}s`
    }

    return plural;
  }

  private esPluralMasSIS(pal:string):boolean{
    let es=false;
    if(pal.endsWith('sis')){
      es=true;
    }
    return es;
  }

  private esPluralMasOES(pal:string):boolean{
    let es=false;
    let expresionReg=/[b-df-hj-np-tv-xz]o$/;//termina en consonante y o
    if(expresionReg.test(pal)){
      es=true;
    }
    return es;
  }

  private esPluralMasIES(pal:string):boolean{
    let es=false;
    let expresionReg=/[b-df-hj-np-tv-xz]y$/;//termina en consonante e y
    if(expresionReg.test(pal)){
      es=true;
    }
    return es;
  }

  private esPluralMasES(pal:string):boolean{
    let terminaciones=['ch', 's', 'sh', 'x' , 'z'];
    let es=false;
    for(let i=0;i<terminaciones.length && !es;i++){
      if(pal.endsWith(terminaciones[i])){
        es=true;
      }
    }
    return es;
  }

  private estaEnUnchangingWord(pal:string):number{
    let esta=false;
    let indice=-1
    for(let i=0;i<this.unchangingWord.length && !esta;i++){
      if(pal==this.unchangingWord[i]){
        esta=true;
        indice=i;
      }
    }
    return indice;
  }

  private rellenarUnchangingWord():void{
    this.unchangingWord.push('bison');
    this.unchangingWord.push('cod');
    this.unchangingWord.push('deer');
    this.unchangingWord.push('fish');
    this.unchangingWord.push('moose');
    this.unchangingWord.push('salmon');
    this.unchangingWord.push('sheep');
    this.unchangingWord.push('swine');
    this.unchangingWord.push('trout');
    this.unchangingWord.push('offspring');
    this.unchangingWord.push('aircraft');
  }

  private rellenarIrregularPlurals():void{
    this.irregularPlurals.set('foot','feet');
    this.irregularPlurals.set('goose','geese');
    this.irregularPlurals.set('louse','lice');
    this.irregularPlurals.set('man','men');
    this.irregularPlurals.set('mouse','mice');
    this.irregularPlurals.set('tooth','teeth');
    this.irregularPlurals.set('woman','women');
    this.irregularPlurals.set('child','children');
    this.irregularPlurals.set('life','lives');
    this.irregularPlurals.set('gentleman','gentlemaen');
    this.irregularPlurals.set('thief','thieves');
    this.irregularPlurals.set('leaf','leaves');
    this.irregularPlurals.set('calf','calves');
  }

}
