import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse, HttpResponseBase, HttpParams, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Book } from './book.model';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = 'http://localhost:8080/'
  
  constructor(private http: HttpClient) { }

  createBook(book: Book): Observable<any>{
    let tokenStri = 'Bearer '+localStorage.getItem('token');
    const headerReq = new HttpHeaders().set('Authorization',tokenStri);
    return this.http.post(this.url+'createBook', book, {headers: headerReq, observe: 'response'}).pipe(
      map((data: any) => {
        console.log('data -->', data)
      },
      catchError(this.errorHandler)
    ))}

getBook(): Observable<Book[]>{
    let tokenStri = 'Bearer '+localStorage.getItem('token');
    const headerReq = new HttpHeaders().set('Authorization',tokenStri);
    return this.http.get(this.url+'getBooks', {headers: headerReq})
    
    .pipe(
      map((response: Book[]) => {
        return response
      }), 
      catchError(this.handleError)
    );
} 

removeBook(id : any): Observable<any>{
  let tokenStri = 'Bearer '+localStorage.getItem('token');
    const headerReq = new HttpHeaders().set('Authorization',tokenStri);
    const paramsReqTeste = new HttpParams().set('id', id);
    
   return this.http.delete(this.url+'deleteBook', { headers: headerReq, params: paramsReqTeste, observe: 'response' }).pipe(
     map((response: any) => {
       return response
     })
   )
      
}
errorHandler(error: HttpErrorResponse) {
  return Observable.throw(error.status || "server error.");
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
