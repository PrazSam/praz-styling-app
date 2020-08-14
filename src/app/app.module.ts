import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app.routing.module';
import { HtmlEntitiesAndSemanticsComponent } from './a-html-entities-and-semantics/html-entities-and-semantics.component';
import { CssBasicsComponent } from './b-css-basics/css-basics.component';
import { DBoxModelComponent } from './d-box-model/d-box-model.component';
import { CBackgroundAndBoardersComponent } from './c-background-and-boarders/c-background-and-boarders.component';
import { ESideMenuComponent } from './e-side-menu/e-side-menu.component';
import { FDisplayPropertyComponent } from './f-display-property/f-display-property.component';
import { GCssPositioningComponent } from './g-css-positioning/g-css-positioning.component';
import { HFormStylingComponent } from './h-form-styling/h-form-styling.component';
import { IHotelProjectComponent } from './i-hotel-project/i-hotel-project.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HtmlEntitiesAndSemanticsComponent, CssBasicsComponent, DBoxModelComponent, CBackgroundAndBoardersComponent, ESideMenuComponent, FDisplayPropertyComponent, GCssPositioningComponent, HFormStylingComponent, IHotelProjectComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
