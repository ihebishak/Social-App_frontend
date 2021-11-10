import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { Component, OnInit, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { UserService } from 'src/app/services/user.service';
import { UtilService } from 'src/app/services/util.service';
import { MatDialog } from '@angular/material/dialog';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-my-timeline',
  templateUrl: './my-timeline.component.html',
  styleUrls: ['./my-timeline.component.css'],
  providers: [
    { provide: MatFormFieldControl, useExisting: MyTimelineComponent}
  ]
})
export class MyTimelineComponent implements OnInit{

  @ViewChild('addPostDialog')
  addPostDialog!:TemplateRef<any>;

  @ViewChild('editPostDialog')
  editPostDialog!:TemplateRef<any>;

  public addPost = {
    title:'',
    msg:'',
    image:File,
    imgUrl:'',
    postid:'',
    likes:0,share:0,dislike:0,fav:false,
  };

  post={title:'',msg:'',image:'',post_id:'',likes:0,share:0,dislike:0,fav:false}

  friendsCount:number=0;
  postsCount:number=0;

  postsset = [
    {
       post_id:'',
       title:'',
       msg:'',
       image:'',
       likes:0,share:0,dislike:0,fav:false,
    },
  ];

  mediaSub!:Subscription;
  mycssDy:any;
  likeBtnDy:any;
  favBtnDy:any;
  mycss1Dy:any;
  proImgDy:any;
  addPostHeadingDy:any;
  addPostCommentDy:any;

  constructor(public loginService: LoginService,
    private userService: UserService,
    public utilService: UtilService,
    public dialog: MatDialog,
    private mediaObserver:MediaObserver) { }

  ngOnInit(): void {

  
}}
