import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { AuthGuard } from './security/auth.guard';
import { SecurityComponent } from './security/security.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: 'login', component: SecurityComponent},
  {path: 'createBook', component: BookCreateComponent, canActivate: [AuthGuard]},
  {path: 'listBook', component: BookListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
