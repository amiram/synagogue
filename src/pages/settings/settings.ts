import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../services/user.service";
import "rxjs/add/operator/toPromise";
import {ToastController} from "ionic-angular";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage implements OnInit, OnDestroy {
  user;

  @ViewChild('userForm') form: NgForm;

  constructor(private userService: UserService, public toastCtrl: ToastController) {

  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    if (this.form.dirty) {
      this.userService.saveUser(this.user).toPromise()
        .then(() => {
          const toast = this.toastCtrl.create({
            message: 'User saved successfully',
            duration: 3000
          });
          toast.present();
        })
    }
  }
}

