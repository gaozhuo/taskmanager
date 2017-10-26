import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../domain/user.model';
import { Project } from '../domain/project.model';
import { appConfig } from '../app.token';

@Injectable()
export class UserService {
  private readonly domain = 'users';
  private readonly headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(@Inject(appConfig) private appConfig,
              private httpClient: HttpClient) {
  }


  searchUsers(filter: string): Observable<User[]> {
    const uri = `${this.appConfig.apiUrl}/${this.domain}`;
    console.log(uri);
    const params = new HttpParams().set('email_like', filter);
    return this.httpClient.get<User[]>(uri, {params: params});
  }

  getUsersByProject(projectId: string): Observable<User[]> {
    const uri = `${this.appConfig.apiUrl}/users`;
    const params = new HttpParams().set('projectId', projectId);
    return this.httpClient.get<User[]>(uri, {params: params});
  }

  addProjectRef(user: User, projectId: string): Observable<User> {
    const uri = `${this.appConfig.apiUrl}/${this.domain}/${user.id}`;
    const projectIds = (user.projectIds) ? user.projectIds : [];
    return this.httpClient
      .patch<User>(uri, JSON.stringify({projectIds: [...projectIds, projectId]}), {headers: this.headers});
  }

  removeProjectRef(user: User, projectId: string): Observable<User> {
    const uri = `${this.appConfig.apiUrl}/${this.domain}/${user.id}`;
    const projectIds = (user.projectIds) ? user.projectIds : [];
    const index = projectIds.indexOf(projectId);
    const toUpdate = [...projectIds.slice(0, index), ...projectIds.slice(index + 1)];
    return this.httpClient
      .patch<User>(uri, JSON.stringify({projectIds: toUpdate}), {headers: this.headers});
  }

  batchUpdateProjectRef(project: Project): Observable<User[]> {
    const projectId = project.id;
    const memberIds = project.members ? project.members : [];
    return Observable.from(memberIds)
      .switchMap(id => {
        const uri = `${this.appConfig.apiUrl}/${this.domain}/${id}`;
        return this.httpClient.get<User>(uri);
      })
      .filter(user => user.projectIds.indexOf(projectId) < 0)
      .switchMap(u => this.addProjectRef(u, projectId))
      .reduce((users, curr) => [...users, curr], []);
  }
}
