import { Injectable } from '@angular/core';
import {tariffModel} from "../Models/tariffModel";

@Injectable({
  providedIn: 'root'
})
export class TariffService {
  Tariff: tariffModel[];
  constructor() { }

  getTariff(id: number = 0): tariffModel{
    this.Tariff = JSON.parse(localStorage.getItem('tariff'));
    return this.Tariff.find(x => x.id == id);
  }
  deleteTariff(id:number): boolean{
    try {
      this.Tariff = this.Tariff.filter(x => x.id != id);
      return true;
    }catch{
      return false;
    }
  }
  saveTariff(tariff: tariffModel){
    this.Tariff.push(tariff);
    localStorage.setItem('tariff', JSON.stringify(this.Tariff));
  }
}
