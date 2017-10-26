import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TaskList } from '../domain/task-list.model';
import { Project } from '../domain/project.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { appConfig } from '../app.token';

@Injectable()
export class TaskListService {
  private readonly domain = 'taskLists';
  private readonly headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(@Inject(appConfig) private appConfig,
              private httpClient: HttpClient) {
  }

  add(taskList: TaskList): Observable<TaskList> {
    const uri = `${this.appConfig.apiUrl}/${this.domain}`;
    return this.httpClient
      .post(uri, JSON.stringify(taskList), {headers: this.headers});
  }

  update(taskList: TaskList): Observable<TaskList> {
    const uri = `${this.appConfig.apiUrl}/${this.domain}/${taskList.id}`;
    const toUpdate = {
      name: taskList.name
    };
    return this.httpClient
      .patch(uri, JSON.stringify(toUpdate), {headers: this.headers});
  }

  del(taskList: TaskList): Observable<TaskList> {
    const uri = `${this.appConfig.apiUrl}/${this.domain}/${taskList.id}`;
    return this.httpClient
      .delete(uri)
      .mapTo(taskList);
  }

  // GET /tasklist
  get(projectId: string): Observable<TaskList[]> {
    const uri = `${this.appConfig.apiUrl}/${this.domain}`;
    const params = new HttpParams().set('projectId', projectId);
    return this.httpClient
      .get(uri, {params: params});
  }

  swapOrder(src: TaskList, target: TaskList): Observable<TaskList[]> {
    const dragUri = `${this.appConfig.apiUrl}/${this.domain}/${src.id}`;
    const dropUri = `${this.appConfig.apiUrl}/${this.domain}/${target.id}`;
    const drag$ = this.httpClient
      .patch<TaskList>(dragUri, JSON.stringify({order: target.order}), {headers: this.headers});
    const drop$ = this.httpClient
      .patch<TaskList>(dropUri, JSON.stringify({order: src.order}), {headers: this.headers});
    return Observable.concat(drag$, drop$).reduce((r, x) => {
      return [...r, x];
    }, []);
  }

  initializeTaskLists(prj: Project): Observable<Project> {
    const id = prj.id;
    return Observable.merge(
      this.add({name: '待办', projectId: id, order: 1}),
      this.add({name: '进行中', projectId: id, order: 2}),
      this.add({name: '已完成', projectId: id, order: 3}))
      .reduce((r, x) => {
        return [...r, x];
      }, [])
      .map(tls => ({...prj, taskLists: tls.map(tl => tl.id)}));
  }
}
