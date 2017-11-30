import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers: [TasksService]
})
export class AddTaskComponent implements OnInit {
  task = {name: ''};

  constructor(private _TasksService: TasksService) { }

  onClick() {
    this._TasksService.insertTask({name: this.task.name});
  }

  ngOnInit() {
  }

}
