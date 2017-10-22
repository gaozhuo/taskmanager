import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../domain/user.model';
import { Auth } from '../domain/auth.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { appConfig } from '../app.token';

/**
 * 认证服务主要用于用户的注册和登录功能
 */
@Injectable()
export class AuthService {
  private readonly headers = new HttpHeaders().set('Content-Type', 'application/json');

  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
    '.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9' +
    '.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';

  /**
   * 构造函数用于注入服务的依赖以及进行必要的初始化
   *
   * @param httpClient 注入Http
   * @param appConfig 注入基础配置
   */
  constructor(private httpClient: HttpClient,
              @Inject(appConfig) private appConfig) {
  }

  /**
   * 使用用户提供的个人信息进行注册，成功则返回 User，否则抛出异常
   *
   * @param user 用户信息，id 属性会被忽略，因为服务器端会创建新的 id
   */
  register(user: User): Observable<Auth> {
    const uri = `${this.appConfig.uri}/users`;
    const params = new HttpParams().set('email', user.email);
    return this.httpClient
      .get<User[]>(uri, {params: params})
      .switchMap(res => {
        if (res.length > 0) {
          throw new Error('username existed');
        }
        return this.httpClient.post<User>(uri, JSON.stringify(user), {headers: this.headers})
          .map(r => ({token: this.token, user: r}));
      });
  }

  /**
   * 使用用户名和密码登录
   *
   * @param username 用户名
   * @param password 密码（明文），服务器会进行加密处理
   */
  login(email: string, password: string): Observable<Auth> {
    const uri = `${this.appConfig.uri}/users`;
    const params = new HttpParams()
      .set('email', email).set('password', password);
    return this.httpClient
      .get<User[]>(uri, {params: params})
      .map(res => {
        if (res.length === 0) {
          throw new Error('Login Failed');
        }
        return {
          token: this.token,
          user: res[0]
        };
      });
  }
}
