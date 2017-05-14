import {Injectable} from "@angular/core";
import {AppConfig} from "../config/app-config";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/share";
import {Subject} from "rxjs/Subject";
import "rxjs/add/operator/merge";
import "rxjs/add/operator/publishLast";
import "rxjs/add/operator/do";

@Injectable()
export class UserService {
  userSubject: Subject<any>;

  constructor(private config: AppConfig, private http: Http) {
    this.userSubject = new Subject<any>();
  }

  getUser() {
    // return this.userSubject.merge(this.http.get(`${this.config.gatewayUrl}/user/59135670f039096b55a072a4`)
    //   .share()
    //   .map(response => response.json()))
    //   .publishLast()
    //   .refCount();
    return this.http.get(`${this.config.gatewayUrl}/user/${this.config.userId}`)
       .share()
       .map(response => response.json());
  }

  saveUser(user) {
    return this.http.put(`${this.config.gatewayUrl}/user`, user)
      .map(response => response.json())
      .do(() => this.userSubject.next(user));
  }
}
