import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

const appRoutes:Routes = [
  {path:'', component: UserAddComponent},
{path:'viewall', component: UserListComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UserSearchComponent,
    NavBarComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
