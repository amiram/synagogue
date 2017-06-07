import {AfterViewInit, Component} from "@angular/core";
import {UserGroupsService} from "../../services/user-groups.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'group-list',
  templateUrl: 'group-list.html'
})
export class GroupListComponent implements AfterViewInit {
  groups: Array<any>;

  constructor(private userGroupsService: UserGroupsService, private userService: UserService) {

  }

  ngAfterViewInit(): void {
    console.log('group list', this.userService.user);
    if (this.userService.user) {
      this.userGroupsService.getUserGroups(this.userService.user.id).subscribe(groups => {
        this.groups = groups;
      });
    }
  }
}
