import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {
  @Input()
  header: string;
  @Output()
  newTask: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  moveAll: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  deleteList: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onNewTaskClick() {
    this.newTask.emit();
  }

  onMoveAllClick() {
    this.moveAll.emit();
  }

  onEditList() {
    this.deleteList.emit();
  }

}
