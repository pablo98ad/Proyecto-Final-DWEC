import { Component, OnInit } from '@angular/core';
import { PluralWordsService } from '../plural-words.service';

@Component({
  selector: 'ap-singular-plural',
  templateUrl: './singular-plural.component.html',
  styleUrls: ['./singular-plural.component.css']
})
export class SingularPluralComponent implements OnInit {

  palabra:string;
  resultado:string;

  constructor(public pluralWords: PluralWordsService) {
    this.palabra='';
    this.resultado='';
   }

  ngOnInit(): void {
  }

  obtenerPlural(){
    this.resultado=this.pluralWords.getPlural(this.palabra);
  }

}
