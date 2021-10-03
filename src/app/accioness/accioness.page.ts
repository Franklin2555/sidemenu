import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-accioness',
  templateUrl: './accioness.page.html',
  styleUrls: ['./accioness.page.scss'],
})
export class AccionessPage implements OnInit {

  constructor(private actionSheetController: ActionSheetController) { }

onclick(){
  this.presentActionSheet();
}
async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Acciones',
    // backdropDismiss:false,
    cssClass: 'my-custom-class',
    buttons: [{
      text: 'Borrar',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        console.log('Delete clicked');
      }
    }, {
      text: 'Compartir',
      icon: 'share',
      handler: () => {
        console.log('Share clicked');
      }
    }, {
      text: 'Play (open modal)',
      icon: 'caret-forward-circle',
      handler: () => {
        console.log('Play clicked');
      }
    }, {
      text: 'Favorito',
      icon: 'heart',
      handler: () => {
        console.log('Favorite clicked');
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();

  const { role } = await actionSheet.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}

  ngOnInit() {
  }

}
