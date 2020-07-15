import { Component, OnInit } from '@angular/core';
import { JwtClientService } from './security/jwt-client.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SecurityComponent } from './security/security.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isUserLogged: any

  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.isLogged()
  }

  login(){
    const modalRef = this.modalService.open(SecurityComponent)

    modalRef.result.then((result) => {
      if(result === 'success'){
        this.isUserLogged = true;
        this.router.navigate(['listBook'])
      }
    })
  }

  isLogged() {
    const isLoged = (localStorage.getItem('token') !== null) ? true : false;
    this.isUserLogged = isLoged
  }

  logout() {
    localStorage.removeItem('token')
    this.isUserLogged = false;
    this.router.navigate([''])
  }
}
