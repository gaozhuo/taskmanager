import { NgModule } from '@angular/core';
import { QuoteService } from './quote.service';
import { ProjectService } from './project.service';
import { TaskService } from './task.service';
import { TaskListService } from './task-list.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@NgModule()
export class ServiceModule {
  static forRoot() {
    return {
      ngModule: ServiceModule,
      providers: [
        QuoteService,
        ProjectService,
        TaskService,
        TaskListService,
        AuthService,
        UserService
      ]
    };
  }
}
