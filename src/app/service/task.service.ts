import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../domain/user.model';
import { Task } from '../domain/task.model';
import { TaskList } from '../domain/task-list.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { appConfig } from '../app.token';


@Injectable()
export class TaskService {
  private readonly domain = 'tasks';
  private readonly headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(@Inject(appConfig) private appConfig,
              private httpClient: HttpClient) {
  }

  add(task: Task): Observable<Task> {
    const uri = `${this.appConfig.apiUrl}/${this.domain}`;
    const toAdd = {
      taskListId: task.taskListId,
      desc: task.desc,
      completed: task.completed,
      ownerId: task.ownerId,
      participantIds: task.participantIds,
      dueDate: task.dueDate,
      priority: task.priority,
      remark: task.remark,
      reminder: task.reminder,
      createDate: task.createDate
    };
    // const addTaskRef$ = this.addTaskRef()
    return this.httpClient
      .post<Task>(uri, JSON.stringify(toAdd), {headers: this.headers});

  }

  update(task: Task): Observable<Task> {
    const uri = `${this.appConfig.apiUrl}/${this.domain}/${task.id}`;
    const toUpdate = {
      desc: task.desc,
      ownerId: task.ownerId,
      participantIds: task.participantIds,
      dueDate: task.dueDate,
      reminder: task.reminder,
      priority: task.priority,
      remark: task.remark
    };
    return this.httpClient
      .patch<Task>(uri, JSON.stringify(toUpdate), {headers: this.headers});
  }

  del(task: Task): Observable<Task> {
    const uri = `${this.appConfig.apiUrl}/${this.domain}/${task.id}`;
    return this.httpClient
      .delete(uri)
      .mapTo(task);
  }

  // GET /tasklist
  get(taskListId: string): Observable<Task[]> {
    const uri = `${this.appConfig.apiUrl}/${this.domain}`;
    const params = new HttpParams().set('taskListId', taskListId);
    return this.httpClient
      .get<Task[]>(uri, {params: params});
  }

  getByLists(lists: TaskList[]): Observable<Task[]> {
    return Observable.from(lists)
      .mergeMap(list => this.get(list.id))
      .reduce((tasks, t) => [...tasks, ...t], []);
  }

  moveAll(srcListId, targetListId): Observable<Task[]> {
    return this.get(srcListId)
      .mergeMap(tasks => Observable.from(tasks))
      .mergeMap(task => this.move(task.id, targetListId))
      .reduce((arrTasks, t) => {
        return [...arrTasks, t];
      }, []);
  }

  move(taskId: string, taskListId: string): Observable<Task> {
    const uri = `${this.appConfig.apiUrl}/${this.domain}/${taskId}`;
    return this.httpClient
      .patch(uri, JSON.stringify({taskListId: taskListId}), {headers: this.headers});
  }

  complete(task: Task): Observable<Task> {
    const uri = `${this.appConfig.apiUrl}/${this.domain}/${task.id}`;
    return this.httpClient
      .patch(uri, JSON.stringify({completed: !task.completed}), {headers: this.headers});
  }

  addTaskRef(user: User, taskId: string): Observable<User> {
    const uri = `${this.appConfig.apiUrl}/users/${user.id}`;
    const taskIds = (user.taskIds) ? user.taskIds : [];
    return this.httpClient
      .patch<User>(uri, JSON.stringify({taskIds: [...taskIds, taskId]}), {headers: this.headers});
  }

  removeTaskRef(user: User, taskId: string): Observable<User> {
    const uri = `${this.appConfig.apiUrl}/users/${user.id}`;
    const taskIds = (user.taskIds) ? user.taskIds : [];
    const index = taskIds.indexOf(taskId);
    return this.httpClient
      .patch<User>(uri, JSON.stringify({taskIds: [...taskIds.slice(0, index), taskIds.slice(index + 1)]}),
        {headers: this.headers});
  }
}
