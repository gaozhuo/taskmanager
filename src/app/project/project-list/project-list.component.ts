import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';
import {InviteComponent} from '../invite/invite.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {slideToRight} from '../../anims/router.anim';
import {listAnimation} from '../../anims/list.anim';
import {ProjectService} from '../../service/project.service';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import {Project} from '../../domain/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight, listAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {
  @HostBinding('@routeAnim') state;

  projects = [];

  constructor(private dialog: MdDialog,
              private changeDetectorRef: ChangeDetectorRef,
              private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projectService.get('37489e0c-df34-c261-71c4-ce75357e3035').subscribe(projects => {
      this.projects = projects;
      this.changeDetectorRef.markForCheck();
    });
  }

  openNewProjectDialog() {
    const img = `/assets/img/covers/${Math.floor(Math.random() * 40)}_tn.jpg`;
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {thumbnails: this.getThumbnails(), img: img}});
    dialogRef.afterClosed()
      .take(1)
      .filter(project => project !== null)
      .map(project => ({...project, coverImg: this.buildImgSrc(project.coverImg)}))
      .switchMap(project => this.projectService.add(project))
      .subscribe(project => {
        console.log(project);
        this.projects = [...this.projects, project];
        this.changeDetectorRef.markForCheck();
      });
  }

  onOpenInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }

  onOpenEditProjectDialog(project: Project) {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: {
        thumbnails: this.getThumbnails(),
        project: project
      }
    });
    dialogRef.afterClosed()
      .take(1)
      .filter(proj => proj !== null)
      .map(proj => ({
        ...proj,
        id: project.id,
        coverImg: this.buildImgSrc(proj.coverImg)
      }))
      .switchMap(proj => this.projectService.update(proj))
      .subscribe(proj => {
        console.log(proj);
        const index = this.projects.map(p => p.id).indexOf(proj.id);
        this.projects = [...this.projects.slice(0, index), proj, ...this.projects.slice(index + 1)];
        this.changeDetectorRef.markForCheck();
      });

  }

  onDeleteProjectDialog(project) {
    console.log(project);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除项目', content: '你确定要删除吗?'}});
    dialogRef.afterClosed()
      .take(1)
      .filter(flag => flag === true)
      .switchMap(_ => this.projectService.delete(project))
      .subscribe(proj => {
        this.projects = this.projects.filter(p => p.id !== proj.id);
        this.changeDetectorRef.markForCheck();
      });
  }

  private getThumbnails() {
    return _.range(0, 40)
      .map(i => `/assets/img/covers/${i}_tn.jpg`);
  }

  private buildImgSrc(img: string): string {
    return img.indexOf('_') > -1 ? img.split('_', 1)[0] + '.jpg' : img;
  }
}
