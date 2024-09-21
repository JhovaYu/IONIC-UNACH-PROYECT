import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonIcon, IonGrid, IonRow, IonCol, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonSegment, IonSegmentButton, IonItem, IonLabel, IonInput, IonText, IonCheckbox } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ IonIcon, IonGrid, IonRow, IonCol, IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonItem, IonLabel, IonInput, IonButton, CommonModule, FormsModule, IonText, IonCheckbox]
})
export class LoginPage implements OnInit {
  email: string = '';
  isValidEmail: boolean = false;
  password: string = '';
  isValidPassword: boolean = false;
  userType: string = "student";
  selectedButton = 1;

  constructor(private router: Router) { 
    addIcons(icons);
  }

  validateEmail(){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.isValidEmail = emailPattern.test(this.email);
    console.log(this.isValidEmail);
  }

  validatePassword() {
    const passwordPattern = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    this.isValidPassword = passwordPattern.test(this.password);
  }

  login(){
    if(this.userType === "student") {
      this.router.navigate(["/student"]);
    }
    else
    {
      this.router.navigate(["/teacher"]);
    }
  }

  forgotPassword(){

  }

  createAccount(){

  }

  singinGoogle(){

  }

  selectButton(buttonNumber: number){
    this.selectedButton = buttonNumber;
  }

  ngOnInit() {
  }

}
