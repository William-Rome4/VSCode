import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "ALERT",
      message: "You made an alert show up!",
      buttons: ['OK']
    });
    alert.present();
  }

  public playWithSetTimeout() {
    setTimeout(function () {
      console.log("Hello World 3 secons from now!");
    }, 3000);
  }

  public showMessage() {
    console.log("Hello World 3 secons from now!");
  }

  async confirmClick() {
    const alert = await this.alertController.create({
      header: "ALERT",
      message: "You made an alert show up!",
      buttons: [
        { text: "Cancel", role: "cancel" },
        {
          text: "OK",
          handler: function () {
            console.log("You confirmed!")
          }
        }
      ]
    });
    alert.present();
  }
}

