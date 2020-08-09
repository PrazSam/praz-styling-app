import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CssBasicsComponent } from './b-css-basics/css-basics.component';
import { DBoxModelComponent } from './d-box-model/d-box-model.component';
import { HtmlEntitiesAndSemanticsComponent } from './a-html-entities-and-semantics/html-entities-and-semantics.component';

const appRoutes: Routes = [
  { 
    path: 'html-entities-and-semantics', 
    component: HtmlEntitiesAndSemanticsComponent 
  },
  { 
    path: 'css-basics',      
    component: CssBasicsComponent 
  },
  { 
    path: 'box-model',      
    component: DBoxModelComponent 
  }
];

@NgModule({
  imports:      [
    RouterModule.forRoot(
      appRoutes
    )],
  exports: [
    RouterModule,
  ],
  declarations: [],
  bootstrap:    []
})
export class AppRoutingModule { }
