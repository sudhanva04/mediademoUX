import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../dataservice';
import { URLSearchParams } from '@angular/http';
import { UrlConstant } from '../../urlConstants'
import { Customer } from '../../entities/customer';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService, private urlValue: UrlConstant) { }

  userName: string;
  password: string;
  customer: Customer = new Customer();
  ngOnInit() {
  }

  login() {
    alert("login data   " + this.userName + "    " + this.password);
    this.validateLoginData(this.userName, this.password).subscribe((customer) => {
      this.customer = <Customer>customer;
      alert(customer) ;
      if (this.customer != null || this.customer != undefined) {
      
      }
    }
      ,
      error => {
        console.log(error);
      });
  }

  validateLoginData(name: string, password: string) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('userName', name);
    params.set('password', password);
    return this.dataService.getObject(this.urlValue.URL + 'user/login', params);
  }




}
