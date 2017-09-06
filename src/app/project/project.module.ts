import {NgModule} from '@angular/core';
import {ProjectItemComponent} from './project-item/project-item.component';
import {NewProjectComponent} from './new-project/new-project.component';
import {InviteComponent} from './invite/invite.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {SharedModule} from '../shared/shared.module';
import {ProjectRoutingModule} from './project-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: [
    ProjectListComponent,
    ProjectItemComponent,
    NewProjectComponent,
    InviteComponent],
  entryComponents: [NewProjectComponent]
})
export class ProjectModule {
}
