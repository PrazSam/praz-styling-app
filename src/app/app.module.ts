import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app.routing.module';
import { HtmlEntitiesAndSemanticsComponent } from './html-entities-and-semantics/html-entities-and-semantics.component';
import { CssBasicsComponent } from './css-basics/css-basics.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HtmlEntitiesAndSemanticsComponent, CssBasicsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
