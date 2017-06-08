import {Component} from '@angular/core';
import {Auth, User, UserDetails, IDetailedError, GoogleAuth} from '@ionic/cloud-angular';
import {UserService} from "../../services/user.service";
import {AlertController} from "ionic-angular";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  details: UserDetails = {
    email: '',
    password: ''
  };

  constructor(public auth: Auth,
              public googleAuth: GoogleAuth,
              public user: User,
              private userService: UserService,
              private alertCtrl: AlertController) {
  }

  login() {
    return this.auth.login('basic', this.details)
      .then(() => {
        this.userService.user = this.user;
      })
      .catch(() => {

      });
  }

  loginWithGoogle() {
    this.googleAuth.login().then(() => {
      alert(this.user);
    })
  }

  signup() {
    this.auth.signup(this.details).then(() => {
      this.login();
    }, (err: IDetailedError<string[]>) => {
      for (let e of err.details) {
        if (e === 'conflict_email') {
          alert('Email already exists.');
        } else {
          // handle other errors
        }
      }
    });
  }

  logout() {
    this.auth.logout();
  }

  passwordChange() {
    const prompt = this.alertCtrl.create({
      title: 'Reset Password',
      message: 'Please look in your inbox to find the code',
      inputs: [
        {
          name: 'code',
          placeholder: 'code'
        },
        {
          name: 'password',
          placeholder: 'New password'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Ok',
          handler: data => {
            this.auth.confirmPasswordReset(data.code, data.password);
          }
        }
      ]
    });
    prompt.present();
  }

  passwordReset() {
    const emailPrompt = this.alertCtrl.create({
      title: 'Reset Password',
      message: 'Please enter your email address',
      inputs: [
        {
          name: 'email',
          placeholder: 'email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Ok',
          handler: data => {
            this.auth.requestPasswordReset(data.email).then(() => {
              this.passwordChange();
            });
          }
        }
      ]
    });
    emailPrompt.present();
  }
}
