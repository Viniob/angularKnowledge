import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookRemoveComponent } from '../book-remove/book-remove.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: Book[] = []
  listBookShop: Book[] = []
 totalValue: any
  
  alert: boolean

  mapBook: Map<String, Book>

  constructor(private serviceBook: BookService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadBooks()
  }

  loadBooks() {
    this.serviceBook.getBook().subscribe(books => {
      this.bookList = books;
    })
  }

  getTotalValue(total, number){
    return total + Math.round(number);
  }

  addToCar(book: Book) {
    // Usar map pra fazer a lista do carrinho de compra
    // map<String, CarModel>
    // Dentro do model CarModel vai ter QuantidadeBook... caso ja exista um book com o mesmo nome no map buscar pela chave e acrescentar +1 quantidade no book comprado 
    if(this.listBookShop.includes(book, 0) == false){
    this.listBookShop.push(book)
    }
    let values = this.listBookShop.map(function(book) {
      return book.price + book.price
    });
    this.totalValue = this.listBookShop.reduce((acc, book) => acc + book.price, 0);
  }  


  removeBook(id: any) {
    const modalRef = this.modalService.open(BookRemoveComponent);
    modalRef.componentInstance.id = id;

    modalRef.result.then((result) => {
      if (result != 'cancel') {
        this.serviceBook.removeBook(id).subscribe(resp => {
          if(resp.status === 200){
            this.alert = true
            setTimeout(() => {
              this.alert = false
            }, 5000)
            this.ngOnInit()
          }
        })  
      } else {
       
      }
      });
  }

 

}
