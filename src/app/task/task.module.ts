import {NgModule} from '@angular/core';
import {TaskHomeComponent} from './task-home/task-home.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskHeaderComponent} from './task-header/task-header.component';
import {TaskItemComponent} from './task-item/task-item.component';
import {SharedModule} from '../shared/shared.module';
import {TaskRoutingModule} from './task-routing.module';
import {NewTaskComponent} from './new-task/new-task.component';
import {MoveTaskComponent} from './move-task/move-task.component';
import {NewListComponent} from './new-list/new-list.component';

@NgModule({
  imports: [
    SharedModule,
    TaskRoutingModule
  ],
  declarations: [
    TaskHomeComponent,
    TaskListComponent,
    TaskHeaderComponent,
    TaskItemComponent,
    NewTaskComponent,
    MoveTaskComponent,
    NewListComponent],
  entryComponents: [NewTaskComponent, MoveTaskComponent, NewListComponent]
})
export class TaskModule {
}
