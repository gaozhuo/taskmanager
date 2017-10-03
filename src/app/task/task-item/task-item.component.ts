import {
  ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, OnInit,
  Output
} from '@angular/core';
import {itemAnims} from '../../anims/item.anims';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [itemAnims],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Output() itemClick = new EventEmitter<void>();
  avatar: String;
  itemState = 'normal';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.itemState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.itemState = 'normal';
  }


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
