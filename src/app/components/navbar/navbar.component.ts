import { UtilService } from './../../services/util.service';
import {  AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { UserService } from 'src/app/services/user.service';
import { stringify } from '@angular/compiler/src/util';
import {AuthService} from 'angularx-social-login';
import {Subscription} from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [
    { provide: MatFormFieldControl, useExisting: NavbarComponent}
  ]
})
export class NavbarComponent  {

  @ViewChild('editProfileDialog')
  editProfileDialog!: TemplateRef<any>;

  userName:string='User';
  colorVal:string='primary';

  private localUser = {
      id:'',
      username:'', 
      firstname:'', 
      lastname:'',
      phone:'', 
      email:'', 
      password:'', 
      profile:'', 
      bio:'',
      imagecov:'',
      imagepro:'',
      enable:'',
  };

  public editProfile = {
      phone:'',
      bio:'',
      imagepro:File,
      imagecov:File,
    };

    openEditProfileSubscription:Subscription;
    navColorChangSubscription:Subscription;
    loginTriggerSubscription:Subscription;
    sidenavMobileTrigger:Subscription;

    mediaSub!:Subscription;
    menuItemsDy:any;
    iconSpaceDy:any;
    btnDy:any;

  constructor(private utilService:UtilService) {
       
     }


  ngOnInit(): void {
    

  }

  switchToMo2(){
    this.utilService.ModChangeSubject.next("mo-2");
 }

 
  

}
