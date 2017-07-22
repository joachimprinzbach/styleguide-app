import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TopbarComponent} from './layout/topbar/topbar.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
