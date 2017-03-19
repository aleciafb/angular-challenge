import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})

export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login(this.model.username, this.model.password).subscribe(result => {
      if (result === true) {
        this.router.navigateByUrl('/projects');
      } else {
        console.log('YOU SHALL NOT ENTER')
      }
    });
  }
}
