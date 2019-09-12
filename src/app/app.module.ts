import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './login/login.component';
import { ThemeComponent } from './theme/theme.component';
import { SettingsComponent } from './settings/settings.component';
import { AreasComponent } from './areas/areas.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthorsComponent } from './authors/authors.component';
import { SectionsComponent } from './sections/sections.component';
import { BooksComponent } from './books/books.component';
import { AdministracionComponent } from './pages/administracion/administracion.component';

@NgModule({
  declarations: [
    AppComponent,LoginComponent, ThemeComponent, SettingsComponent, AreasComponent, CategoriesComponent, AuthorsComponent, SectionsComponent, BooksComponent, AdministracionComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
