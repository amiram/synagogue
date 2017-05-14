import {Component, OnInit} from "@angular/core";
import {UserGroupsService} from "../../services/user-groups.service";
import {AppConfig} from "../../config/app-config";
import {CreateGroupPage} from "./create-group";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-user-groups',
  templateUrl: 'user-groups.html'
})
export class UserGroupsPage implements OnInit {
  userGroups;

  constructor(private userGroupsService: UserGroupsService, private config: AppConfig, public navCtrl: NavController) {

  }

  ngOnInit(): void {
    this.userGroupsService.getUserGroups(this.config.userId)
      .subscribe(userGroups => this.userGroups = userGroups);
  }

  createGroup() {
    this.navCtrl.push(CreateGroupPage);
  }
}
