import {Injectable} from "@angular/core";
import {AppConfig} from "../config/app-config";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/share";
import "rxjs/add/operator/merge";
import "rxjs/add/operator/publishLast";
import "rxjs/add/operator/do";
import {Auth, User} from "@ionic/cloud-angular";

@Injectable()
export class UserService {

  constructor(public auth: Auth, private config: AppConfig, private http: Http, public user: User) {
  }

  saveUser(user) {
    return this.http.put(`${this.config.gatewayUrl}/users`, user)
      .map(response => response.json());
  }
}
