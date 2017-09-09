import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {NewTaskComponent} from '../new-task/new-task.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
  lists = [
    {
      id: 1,
      name: '代办',
      tasks: [
        {
          id: 1,
          desc: '任务一：去星巴克买咖啡',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务二：去商场买衣服',
          completed: false,
          priority: 2,
          reminder: true,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date()
        }

      ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务三：打篮球',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatars:svg-13'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务四：写ppt',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-14'
          },
          dueDate: new Date()
        }
      ]
    }
  ];

  constructor(private dialog: MdDialog) {
  }

  ngOnInit() {
  }

  onOpenNewTaskDialog() {
    this.dialog.open(NewTaskComponent);
  }
}