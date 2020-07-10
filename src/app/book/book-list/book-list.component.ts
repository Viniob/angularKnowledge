import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookRemoveComponent } from '../book-remove/book-remove.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: Book[] = []
  newList = []

  constructor(private serviceBook: BookService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadBooks()
  }

  loadBooks() {
    this.serviceBook.getBook().subscribe(books => {
      this.bookList = books;
    })
  }

  detailBook(id: any) {
    console.log('redirecionando com valor id --> ', id)

  }  


  removeBook(id: any) {
    const modalRef = this.modalService.open(BookRemoveComponent);
    modalRef.componentInstance.id = id;

    modalRef.result.then((result) => {
      if (result != 'cancel') {
        
        this.serviceBook.removeBook(id).subscribe(response => {
          console.log('?? --> ', response)
        })
      } else {
        console.log('operação cancelada :-)')
      }
      });
  }

}
