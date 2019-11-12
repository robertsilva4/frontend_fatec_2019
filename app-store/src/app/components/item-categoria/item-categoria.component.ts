import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from 'src/app/models/produto.model';

@Component({
  selector: 'item-categoria',
  templateUrl: './item-categoria.component.html',
  styleUrls: ['./item-categoria.component.css']
})

export class ItemCategoriaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() Categoria: Categoria;

}
