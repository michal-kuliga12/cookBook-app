import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { FullNavbarComponent } from './components/full-navbar/full-navbar.component';
import { RecipesComponent } from './components/recipes/recipes.component';

@NgModule({
  declarations: [AppComponent, TopNavbarComponent, SideNavbarComponent, FullNavbarComponent, RecipesComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
