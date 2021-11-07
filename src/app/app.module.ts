import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddFriendComponent } from './components/add-friend/add-friend.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CovidInfoComponent } from './components/covid-info/covid-info.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { FindLocationComponent } from './components/find-location/find-location.component';
import { FooterComponent } from './components/footer/footer.component';
import { FriendProfileComponent } from './components/friend-profile/friend-profile.component';
import { FriendsComponent } from './components/friends/friends.component';
import { GetUsersComponent } from './components/get-users/get-users.component';
import { HelpComponent } from './components/help/help.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyTimelineComponent } from './components/my-timeline/my-timeline.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import { RemoveFriendComponent } from './components/remove-friend/remove-friend.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TrendingVideosComponent } from './components/trending-videos/trending-videos.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AddFriendComponent,
    ContactUsComponent,
    CovidInfoComponent,
    DeleteUserComponent,
    FindLocationComponent,
    FooterComponent,
    FriendProfileComponent,
    FriendsComponent,
    GetUsersComponent,
    HelpComponent,
    MyProfileComponent,
    MyTimelineComponent,
    NavbarComponent,
    PhotoGalleryComponent,
    RemoveFriendComponent,
    SettingsComponent,
    TrendingVideosComponent,
    AdminDashboardComponent,
    LoginComponent,
    SignupComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
