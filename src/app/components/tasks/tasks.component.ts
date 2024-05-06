import { Component } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../interfaces/Tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})

export class TasksComponent {
  tasks: Task[] = []


  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => {
      (this.tasks = tasks)
    })
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTasks(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id)))
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    // console.log(task.reminder)
    this.taskService.updateTaskReminder(task).subscribe()
  }
}
