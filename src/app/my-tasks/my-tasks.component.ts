import { Component, OnInit } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';
import { Tasks } from '../tasks';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css'],
  directives: [AddTaskComponent],
  providers: [TasksService]
})
export class MyTasksComponent implements OnInit {

  tasks: Array<Tasks>;
  // selectedItem: Tasks;

  constructor(private  _tasksService: TasksService) { }

  ngOnInit(): any {
    this.tasks = this._tasksService.getTask();
  }

}
