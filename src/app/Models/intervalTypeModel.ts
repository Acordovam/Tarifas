import {Time, WeekDay} from "@angular/common";
import {fixedTariffModel, hourFractionModel, rangeHoursModel} from "./tariffTypeModel";

export class daysModel {
  day: string;
  active: boolean;
}
export class scheduleModel {
  startTime: Time;
  endTime: Time;
  days: daysModel[] = [
    {
      day: 'Domingo',
      active: false
    },{
      day: 'Lunes',
      active: false
    },{
    day: 'Martes',
      active: false
    },{
    day:'Miércoles',
      active: false
    },{
    day: 'Jueves',
      active: false
    },{
    day: 'Viernes',
      active: false
    },{
    day: 'Sábado',
      active: false
    }
  ];
  tariffType: fixedTariffModel | hourFractionModel | rangeHoursModel;
}

export class eventModel {
  id: number;
  name: string = "";
  description: string = "";
  startEvent: Date = new Date();
  endEvent: Date = new Date();
  tariffType: fixedTariffModel | hourFractionModel | rangeHoursModel;
}
export class defaultModel {
  id: number;
  tariffType: fixedTariffModel | hourFractionModel | rangeHoursModel;
}
