import { Component, OnDestroy } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  title: string = 'Task Tracker';
  showAddTask: boolean = true;
  subscription: Subscription;

  constructor(
    private uiService: UiService,
    private router: Router
  ) {
    this.subscription = this.uiService.onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

  ngOnDestroy() {
    // É importante cancelar a inscrição para evitar vazamento de memória
    this.subscription.unsubscribe();
  }
}
