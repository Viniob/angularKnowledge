import { Component, OnInit } from '@angular/core';
import { JwtClientService } from './jwt-client.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  loginForm: FormGroup = null




  authRequest: any = {
    'username': 'vinicius',
    'password': '123'
  }
  welcomer: any;
  constructor(private jwtService: JwtClientService, private router: Router) { }

  ngOnInit() {
    // this.getAccessToken(this.authRequest);

    this.createForm()
  }

  createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }


  loginUser() {
    this.authRequest = this.loginForm.value
    let resp = this.jwtService.genereteToken(this.authRequest);
    resp.subscribe(resposta => {
      localStorage.setItem('token', resposta.toString())
      this.router.navigate(['/listBook'])
    })
  }



  loggedIn() {
    
    return !!localStorage.getItem('token');
  }

}
