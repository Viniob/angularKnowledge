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

@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    BookCreateComponent,
    BookListComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule   
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
