import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';
@Component({
  selector: 'app-create-to-do',
  imports: [ListComponent],
  templateUrl: './create-to-do.component.html',
  styleUrl: './create-to-do.component.css'
})
export class CreateToDoComponent {

  createTask(task: string){
    console.log(task);
  }
}
