import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input()
  item;
  @Output()
  itemClick = new EventEmitter<void>();
  avatar: String;

  constructor() {
  }

  ngOnInit() {
    this.avatar = this.item.owner.avatar;
  }

  onItemClick() {
    this.itemClick.emit();
  }

  onCheckboxClick(event) {
    event.stopPropagation();
  }

}
