import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';

import { FormsModule } from '@angular/forms';
import { DetalhesProdutooComponent } from './detalhes-produto/detalhes-produto.component';


@NgModule({
  declarations: [
    ProdutosComponent,
    DetalhesProdutooComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
  ]
})
export class ProdutosModule { }
