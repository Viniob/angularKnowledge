import { Component, OnInit } from '@angular/core';
import { JwtClientService } from './security/jwt-client.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SecurityComponent } from './security/security.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'knowledgeSecurity';
  constructor(){}

  isLogged: boolean
  ngOnInit(){
    this.isLogged = !!localStorage.getItem('token')
    }
}
