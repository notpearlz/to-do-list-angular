import { Component } from '@angular/core';
import { CreateToDoComponent } from '../create-to-do/create-to-do.component';
@Component({
  selector: 'app-list',
  imports: [CreateToDoComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  tasks: Array<string> = ["task 1", "task 2", "task 3"]
}
