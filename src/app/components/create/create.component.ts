import {Component, OnInit} from '@angular/core';
import {daysModel, defaultModel, eventModel, scheduleModel} from "../../Models/intervalTypeModel";
import {tariffModel} from "../../Models/tariffModel";
import Swal from 'sweetalert2';
import {fixedTariffModel, hourFractionModel, rangeHoursModel} from "../../Models/tariffTypeModel";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  intervalType: number;
  tariffType: number;
  tariff: tariffModel = new tariffModel();
  schedulers: scheduleModel[] = new Array<scheduleModel>();
  newScheduler: scheduleModel = new scheduleModel();
  events: eventModel[] = new Array<eventModel>();
  event: eventModel = new eventModel();
  intervalSelected: number = 0;
  days: daysModel;
  startDate: NgbDateStruct;
  endDate: NgbDateStruct;
  hourFraction: hourFractionModel = new hourFractionModel();
  hourRange: rangeHoursModel = new rangeHoursModel();

  fixedTariff: fixedTariffModel = new fixedTariffModel();
  timeStart = {hour: 13, minute: 0};
  timeEnd = {hour: 13, minute: 0};

  constructor() {
  }

  ngOnInit(): void {
  }

  guardarHorario() {
    this.newScheduler.startTime = {
      hours: this.timeStart.hour,
      minutes: this.timeStart.minute
    }
    this.newScheduler.endTime = {
      hours: this.timeEnd.hour,
      minutes: this.timeEnd.minute
    }
    let validate = this.existScheduler();
    if (!validate) {
      this.schedulers.push(this.newScheduler);
      this.newScheduler = new scheduleModel();
    }else{
      Swal.fire({
        title: 'Error!',
        text: 'Los horarios se traslapan, porfa vor asegurese de que los horarios y los dias esten correctos y seleccionados.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    }
    console.log(this.schedulers);
  }

  agregarTarifa(id: number) {
    this.intervalSelected = id;
  }

  existScheduler(): boolean {
    let resp = false;
    if (!this.newScheduler.days.find(day => day.active == true)) {
      return true;
    }
    if (this.schedulers.find(x => this.newScheduler.startTime.hours >= x.startTime.hours && this.newScheduler.startTime.minutes >= x.startTime.minutes
      && this.newScheduler.startTime.hours <= x.endTime.hours && this.newScheduler.startTime.minutes <= x.endTime.minutes
      || this.newScheduler.endTime.hours >= x.startTime.hours && this.newScheduler.endTime.minutes >= x.startTime.minutes
      && this.newScheduler.endTime.hours <= x.endTime.hours && this.newScheduler.endTime.minutes <= x.endTime.minutes)) {

      this.schedulers.forEach(x=> {
        x.days.forEach(day => {
          if(this.newScheduler.days.find(newDay => newDay.day == day.day && newDay.active == day.active && newDay.active == true)) {
            console.log(this.newScheduler.days);
            resp = true;
          }
        });
      });
    }
    if (this.newScheduler.startTime.hours >= this.newScheduler.endTime.hours
      && this.newScheduler.startTime.minutes >= this.newScheduler.endTime.minutes) {
      return true;
    }
    return resp;
  }

  saveTariff() {
    let id = this.intervalSelected;
    switch (this.intervalType) {
      case 1:
        switch (this.tariffType) {
          case 1:
            this.schedulers[id - 1].tariffType = this.fixedTariff;
            break;
          case 2:
            this.schedulers[id - 1].tariffType = this.hourFraction;
            break;
          case 3:
            this.schedulers[id - 1].tariffType = this.hourRange;
        }
        break;
      case 2:
        switch (this.tariffType) {
          case 1:
            this.events[id - 1].tariffType = this.fixedTariff;
            break;
          case 2:
            this.events[id - 1].tariffType = this.hourFraction;
            break;
          case 3:
            this.events[id - 1].tariffType = this.hourRange;
        }
        break;
      case 3:
        this.tariff.defaultType = new defaultModel();
        switch (this.tariffType) {
          case 1:
            this.tariff.defaultType.tariffType = this.fixedTariff;
            break;
          case 2:
            this.tariff.defaultType.tariffType = this.hourFraction;
            break;
          case 3:
            this.tariff.defaultType.tariffType = this.hourRange;
            break
        }
        break;
    }
    this.tariff.scheduleType = (this.schedulers);
    this.tariff.eventType = this.events;
    console.log(this.tariff);
    this.fixedTariff = new fixedTariffModel();
    this.intervalSelected = 0;
  }

  guardarEvento() {
    if(this.event.name.length>0 && this.event.endEvent >= this.event.startEvent && this.event.endEvent && this.event.startEvent){
      this.event.startEvent = new Date();
      this.event.endEvent = new Date();
      this.event.startEvent.setFullYear(this.startDate.year, this.startDate.month, this.startDate.day);
      this.event.endEvent.setFullYear(this.endDate.year, this.endDate.month, this.endDate.day);
      this.events.push(this.event);
      console.log(this.events);
      this.event = new eventModel();
    }else{
      Swal.fire({
        title: 'Error!',
        text: 'No se han llenado todos los datos.',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    }

  }
}
