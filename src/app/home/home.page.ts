import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IBaseObject, IFish, ISea, IBug, IType, IObject } from '../common/interfaces';
import { CardComponent } from '../components/card/card.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  item: IBaseObject;
  items: IBaseObject[]; 
  allItemNames = [
    IType.FISH,
    IType.BUG,
    IType.SEA,
   // IType.FOSSIL
  ];
  allItems = [] as any[];
  allObjects = [] as IObject[];

  constructor(
    private api: ApiService,
    private modalCtrl: ModalController
  ) {
    //
  }

  ngOnInit() {
    for (const i of this.allItemNames) {
      this.api.getAllItems(i).subscribe(res => {
        this.allObjects.push({ dataType: i, data: res  });
        console.log(this.allObjects);
      });
    }
  }

  getOneFish(id: number) {
    this.api.getOneItem(id, IType.FISH).subscribe((res: IFish) => {
      // this.presentModal();
    });
  }

  getAllItems(item: IType) {
    this.api.getAllItems(item).subscribe(res => {
      this.items = res;
    });
  }

  async presentModal(data: IFish|ISea|IBug, dataType: IObject['dataType']) {
    const modal = await this.modalCtrl.create({
      component: CardComponent,
      cssClass: 'appCard',
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: {
        data,
        dataType
      }
    });
    return await modal.present();
  }
}
