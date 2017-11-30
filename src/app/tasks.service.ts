import { Injectable } from '@angular/core';
import { Tasks } from './tasks';
import { tasks_list } from './mock-tasks-list';

@Injectable()
export class TasksService {
  getTask() {
    return tasks_list;
  }

  insertTask(task: Tasks) {
    tasks_list.push(task);
  }

  constructor() { }

}
