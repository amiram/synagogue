import {Component, Input} from "@angular/core";

@Component({
  selector: 'group-list-item',
  templateUrl: 'group-list-item.html'
})
export class GroupListItemComponent {
  @Input() group;
}
