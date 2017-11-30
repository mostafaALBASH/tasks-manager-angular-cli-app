import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TasksService } from './tasks.service';


import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    MyTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
