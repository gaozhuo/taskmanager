import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h3 md-dialog-title>{{title}}</h3>
    <div md-dialog-content>
      {{content}}
    </div>
    <div md-dialog-actions>
      <button type="button" md-raised-button color="primary" (click)="handleEvent(true)">确定</button>
      <button type="button" md-button (click)="handleEvent(false)">关闭</button>
    </div>
  `,
  styles: []
})
export class ConfirmDialogComponent implements OnInit {
  title: String;
  content: String;

  constructor(@Inject(MD_DIALOG_DATA) private data, private dialogRef: MdDialogRef<ConfirmDialogComponent>) {
  }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  handleEvent(flag: boolean) {
    this.dialogRef.close(flag);
  }

}
