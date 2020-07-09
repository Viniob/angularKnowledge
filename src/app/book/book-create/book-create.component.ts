import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { map, catchError } from 'rxjs/operators';
import { Book } from '../book.model';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  categorys = [{"id":1, "name":"Tecnologia"},{"id":2, "name":"Direito"},{"id":3, "name":"Historia"}]
  categoryIdSelected: number
  book: Book
  form: FormGroup = null;

  constructor(private serviceBook : BookService) { }

  

  ngOnInit(): void {
   this.createForm()
  }

  createForm(){
    this.form = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      category: new FormControl(this.categorys)
    })
  }
  
  createBook(){
    this.book = this.form.value
    this.book.category = this.categoryIdSelected
    this.serviceBook.createBook(this.book) 
  }

 /*  createBook1() {
    this.book = this.form.value
    this.book.category = this.categoryIdSelected
    this.serviceBook.createBook1(this.book).pipe(
      map((res: Book) => {
        if (res.id) {
          console.log(res.id);
        }
      }), catchError(this.handleError)
    );
  } 
  */


  categorySelected(id: any){
    this.categoryIdSelected = id;
    console.log('?? -> ', this.categoryIdSelected)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
