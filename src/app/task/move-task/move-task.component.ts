import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-move-task',
  templateUrl: './move-task.component.html',
  styleUrls: ['./move-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoveTaskComponent implements OnInit {
  lists: any[];

  constructor(@Inject(MD_DIALOG_DATA) private data, private dialogRef: MdDialogRef<MoveTaskComponent>) {
  }

  ngOnInit() {
    this.lists = this.data.lists;
  }

}
