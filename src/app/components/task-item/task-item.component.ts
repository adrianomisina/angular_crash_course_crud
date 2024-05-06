import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from '../../interfaces/Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;

  @Output() onDeleteTaks: EventEmitter<Task> = new EventEmitter();
  
  faTimes = faTimes;
  
  ngOnInit(): void {}

// task-item.component.ts
onDelete(task: Task) {
  this.onDeleteTaks.emit(task);
}
}
