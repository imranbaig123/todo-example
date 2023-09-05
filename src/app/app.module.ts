import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TodoComponent } from './components/todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

const routes: Route[] = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'add', component: TodoFormComponent},
  {path: 'list', component: TodoListComponent},
  {path: 'favorite', component: TodoListComponent},
  {path:'**', component: PageNotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TodoComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
