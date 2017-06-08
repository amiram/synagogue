import {Component, Input} from "@angular/core";

@Component({
  selector: 'group-list',
  templateUrl: 'group-list.html'
})
export class GroupListComponent {
  @Input() groups: Array<any>;

  constructor() {

  }
}
