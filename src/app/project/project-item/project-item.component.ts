import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input()
  item;
  @Output()
  invite: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  editProject: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  deleteProject: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onInvite() {
    this.invite.emit();
  }

  onEditProject() {
    this.editProject.emit();
  }

  onDeleteProject() {
    this.deleteProject.emit();
  }

}
