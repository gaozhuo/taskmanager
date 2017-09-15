import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {
  title: String;

  constructor(@Inject(MD_DIALOG_DATA) private data, private dialogRef: MdDialogRef<NewListComponent>) {
  }

  ngOnInit() {
    this.title = this.data.title;
  }

}
