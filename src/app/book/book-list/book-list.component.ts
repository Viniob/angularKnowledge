import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private serviceBook : BookService) { }

  ngOnInit(): void {
    console.log('we did it? -->', this.serviceBook.getBook().subscribe(response => {
      console.log(response.length)
    }))
  }



}
