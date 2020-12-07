import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { USER } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  //loggedIn: boolean = false;
  //currentUser$!: Observable<USER>;

  constructor(public accountService: AccountService, 
    private router: Router, 
    private toaster: ToastrService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    //console.log(this.model);
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('/members')
      //this.loggedIn = true;
    }, error => {
      console.log(error);
      this.toaster.error(error.error);
    })
    
  }

  logout(){
    this.accountService.logout();
    //this.loggedIn = false;
    this.router.navigateByUrl('/');
  }

/*
  getCurrentUser(){
    this.accountService.currentUser$.subscribe(user => {
      //this.loggedIn = !!user;
    }, error => {
      console.log(error);
    })
  }
*/

}
