import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { FullNavbarComponent } from './components/full-navbar/full-navbar.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent } from './pages/index/index.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { LoginHeaderComponent } from './components/login-header/login-header.component';
import { LoginInfoBarComponent } from './components/login-info-bar/login-info-bar.component';
import { LoginChangeModeBtnComponent } from './components/login-change-mode-btn/login-change-mode-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SideNavbarComponent,
    FullNavbarComponent,
    RecipesComponent,
    LoginComponent,
    IndexComponent,
    LoginFormComponent,
    RecipeComponent,
    LoginHeaderComponent,
    LoginInfoBarComponent,
    LoginChangeModeBtnComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
