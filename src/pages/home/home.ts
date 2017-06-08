import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserGroupsService} from "../../services/user-groups.service";
import {AlertController} from "ionic-angular";
import {User} from "@ionic/cloud-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  groups: Array<any>;

  constructor(private userGroupsService: UserGroupsService,
              private userService: UserService,
              private alertCtrl: AlertController,
              public user: User) {

  }

  ngAfterViewInit(): void {
    console.log('group list', this.userService.user);
    if (this.userService.user) {
      this.userGroupsService.getUserGroups(this.userService.user.id).subscribe(groups => {
        this.groups = this.groups || [];
        this.groups.push(...groups);
      });
    }
  }

  addGroup() {
    const prompt = this.alertCtrl.create({
      title: 'Add New Group',
      message: 'Please add the new group details',
      inputs: [
        {
          name: 'name',
          placeholder: 'name'
        },
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Ok',
          handler: data => {
            data.userIds = [this.user.id];
            data.managerIds = [this.user.id];
            this.userGroupsService.createGroup(data).subscribe(group => {
              console.log(this.groups);
              this.groups.push(group)
            });
          }
        }
      ]
    });
    prompt.present();
  }
}
