import { Injectable } from '@angular/core';
import { Iprodutocarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: Iprodutocarrinho[] = []
  constructor() { }



  obtemCarrinho(){
    this.itens =JSON.parse(localStorage.getItem("carrinho") || "[]")
    return this.itens
  }

  adicionarCarrinho(produto: Iprodutocarrinho){
    this.itens.push(produto)

    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }

  limparCarrinho(){
    this.itens = []
    localStorage.clear()
  }

  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId)
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }
}
