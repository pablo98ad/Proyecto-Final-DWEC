import { Component, OnInit } from '@angular/core';
import { PluralWordsService } from '../plural-words.service';
import { EnglishWordsService } from '../english-words.service';

@Component({
  selector: 'ap-plurales',
  templateUrl: './plurales.component.html',
  styleUrls: ['./plurales.component.css']
})
export class PluralesComponent implements OnInit  {

  respuestasUser:string[];
  resultados:string[];
  cuatroPalabrasAleatorias:string[];

  constructor(public pluralWords: PluralWordsService, public englishWords:EnglishWordsService) {
    this.cuatroPalabrasAleatorias=[];
    this.respuestasUser=['','','',''];
    this.resultados=['','','',''];
   }

  ngOnInit(): void {
    this.cuatroPalabrasAleatorias=this.generarAleatorias();
  }

  comprobarRespuestas():void{
    for (let i=0; i<this.respuestasUser.length; i++){
      if(this.pluralWords.getPlural(this.cuatroPalabrasAleatorias[i])==this.respuestasUser[i].toLowerCase()){
        this.resultados[i]='acierto';
      }else{
        this.resultados[i]='fallo';
      }
    }
  }

  private generarAleatorias():string[]{
    let cuatroAlesSet =new Set();
    let arrayCuatroAle=[];
    do {
      let numAle= Math.trunc(Math.random()*this.englishWords.words.length);
      cuatroAlesSet.add(this.englishWords.words[numAle]);
    }while(cuatroAlesSet.size!=4);//asi conseguimos 4 palabras unicas

    for (let palabra of cuatroAlesSet){//lo combertimos a array
      arrayCuatroAle.push(palabra);
    }

    return arrayCuatroAle;
  }
}
