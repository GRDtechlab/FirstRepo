import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState,selectAuthState  } from '../store/app.states';
import {LogOut } from '../store/actions/auth.actions'
import { Observable } from 'rxjs';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  getState: Observable<any>;
  isAuthenticated!: false;
  user!: any ;
  errorMessage = null;
  constructor(private store: Store<AppState>) { 
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
  }
  logOut(): void {
    this.store.dispatch(new LogOut);
  }
}
