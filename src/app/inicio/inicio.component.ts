import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  IMAGEN='assets/libros.png';
  constructor() { }

  ngOnInit(): void {
  }

}
