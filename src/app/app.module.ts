import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityComponent } from './security/security.component';
import {HttpClientModule} from '@angular/common/http';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { BookListComponent } from './book/book-list/book-list.component'
import {AuthGuard} from './security/auth.guard'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BookService} from './book/book.service';
import  { BookRemoveComponent} from './book/book-remove/book-remove.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    BookCreateComponent,
    BookListComponent,
    BookRemoveComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule  
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [ BookRemoveComponent ]
})
export class AppModule { }
