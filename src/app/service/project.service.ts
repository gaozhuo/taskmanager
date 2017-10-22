import {Inject, Injectable} from '@angular/core';
import {appConfig} from '../app.token';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Project} from '../domain/project.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProjectService {
  private readonly domain: string = 'projects';
  private readonly headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient, @Inject(appConfig) private appConfig) {
  }

  add(project: Project): Observable<Project> {
    const url = `${this.appConfig.apiUrl}/${this.domain}`;
    return this.httpClient.post(url, JSON.stringify(project), {headers: this.headers});
  }

  update(project: Project): Observable<Project> {
    const url = `${this.appConfig.apiUrl}/${this.domain}/${project.id}`;
    const toUpdate = {
      name: project.name,
      desc: project.desc,
      coverImg: project.coverImg
    };
    return this.httpClient.patch(url, JSON.stringify(toUpdate), {headers: this.headers});
  }

  delete(project: Project): Observable<Project> {
    console.log('proejct id=' + project.id);
    const url = `${this.appConfig.apiUrl}/${this.domain}`;
    const $deleteTask = Observable.from(project.taskLists ? project.taskLists : [])
      .flatMap(listId => this.httpClient.delete(`${this.appConfig.apiUrl}/taskLists/${listId}`))
      .count();
    return $deleteTask.switchMap(_ => this.httpClient.delete(`${this.appConfig.apiUrl}/${this.domain}/${project.id}`))
      .map(_ => project);
  }

  get(userId: string): Observable<Project[]> {
    const url = `${this.appConfig.apiUrl}/${this.domain}`;
    const params = new HttpParams().set('members_like', userId);
    return this.httpClient.get<Project[]>(url, {params: params});
  }

}
