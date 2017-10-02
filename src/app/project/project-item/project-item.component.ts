import {
  ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, OnInit,
  Output
} from '@angular/core';
import {cardAnims} from '../../anims/card.anims';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [cardAnims],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() invite: EventEmitter<void> = new EventEmitter<void>();
  @Output() editProject: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteProject: EventEmitter<void> = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'normal';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'normal';
  }

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
