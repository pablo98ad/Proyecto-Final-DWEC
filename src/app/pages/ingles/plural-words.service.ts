import { Injectable } from '@angular/core';
import {EnglishWords} from './english-words';
@Injectable({
  providedIn: 'root'
})
export class PluralWordsService {

  private irregularPlurals:Map<string,string>;
  private unchangingWord:String[];

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


  private esPluralMasOES(pal:string){
    let es=false;
    let expresionReg=/[a-z]o$/;
    if(expresionReg.test(pal)){
      es=true;
    }
    return es;
  }

  private esPluralMasIES(pal:string){
    let es=false;
    let expresionReg=/[a-z]y$/;
    if(expresionReg.test(pal)){
      es=true;
    }
    return es;
  }

  private esPluralMasES(pal:string){
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

  private rellenarUnchangingWord(){

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
  private rellenarIrregularPlurals(){
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
