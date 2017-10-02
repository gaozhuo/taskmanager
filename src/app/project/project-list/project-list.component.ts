import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';
import {InviteComponent} from '../invite/invite.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {slideToRight} from '../../anims/router.anim';
import {listAnimation} from '../../anims/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight, listAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {
  @HostBinding('@routeAnim') state;

  projects = [
    {
      id: 1,
      name: '问题跟踪系统',
      desc: '用于 Bug 的内部跟踪和管理',
      coverImg: '/assets/img/covers/1.jpg'
    },
    {
      id: 2,
      name: '某某公司 ERP 系统',
      desc: '为某某公司开发的定制化 ERP 系统',
      coverImg: '/assets/img/covers/2.jpg'
    }
  ];

  constructor(private dialog: MdDialog, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '新建项目'}});
    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      this.projects = [...this.projects,
        {
          id: 3,
          name: '讨论angular需求',
          desc: '单点登录，部署',
          coverImg: '/assets/img/covers/4.jpg'
        }];
      this.changeDetectorRef.markForCheck();
    });
  }

  onOpenInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }

  onOpenEditProjectDialog(project) {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '编辑项目', project: project}});

  }

  onDeleteProjectDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除项目', content: '你确定要删除吗?'}});
    dialogRef.afterClosed().subscribe(flag => {
      console.log(flag);
      this.projects = this.projects.filter(p => p.id !== project.id);
      this.changeDetectorRef.markForCheck();
    });
  }
}
