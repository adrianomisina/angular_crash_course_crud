import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/Tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder!: boolean;

  onSubmit() {
    if(!this.text) {
      alert('Please add a task!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    //@todo -emit event

    this.onAddTask.emit(newTask)
    
    this.text = '';
    this.day = '';
    this.reminder = false;


  }

}
