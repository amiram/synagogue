import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {AppConfig} from "../config/app-config";
import {Subject} from "rxjs/Subject";

@Injectable()
export class UserGroupsService {
  userGroups: Subject<any>;

  constructor(private http: Http, private config: AppConfig) {
    this.userGroups = new Subject<any>();
  }

  getUserGroups(userId) {
    return this.userGroups.merge(this.http.get(`${this.config.gatewayUrl}/group/user/${userId}`)
      .map(response => response.json()));
  }

  createGroup(group) {
    return this.http.post(`${this.config.gatewayUrl}/group/user`, group)
      .map(r => r.json())
      .do(() => {
          this.userGroups.next(group);
      });
  }
}
