import {Component} from "@angular/core";
import {UserGroupsService} from "../../services/user-groups.service";
import {NavController, ToastController} from "ionic-angular";
import {AppConfig} from "../../config/app-config";

@Component({
  selector: 'page-create-group',
  templateUrl: 'create-group.html'
})
export class CreateGroupPage {
  group: any = {};

  constructor(private userGroupsService: UserGroupsService, private toastCtrl: ToastController, private config: AppConfig, private navCtrl: NavController) {

  }

  createGroup() {
    this.group.userIds = [this.config.userId];
    this.group.managerIds = [this.config.userId];

    this.userGroupsService.createGroup(this.group)
      .toPromise()
      .then(() => {
        const toast = this.toastCtrl.create({
          message: 'Group created successfully',
          duration: 3000
        });
        toast.present().then(() => {
            this.navCtrl.pop();
        });
      })
  }
}
