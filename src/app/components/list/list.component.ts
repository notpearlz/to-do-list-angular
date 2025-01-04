import { Component } from '@angular/core';
@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  tasks: Array<string> = [
    "task 1", 
    "task 2", 
    "task 3"]

  createTask(task: string){
    if (task.length == 0){
      alert("please put in a task")
    } else if(task.length >= 100){
      alert("task must be less than 100 characters")
    } else {
      this.tasks.push(task);
    }


  }

  deleteTask(task: string){
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }
}
