import {Component, Input, OnInit} from '@angular/core';
import {scheduleModel} from "../../Models/intervalTypeModel";
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-tarifa-types',
  templateUrl: './tarifa-types.component.html',
  styleUrls: ['./tarifa-types.component.css']
})
export class TarifaTypesComponent implements OnInit {
  @Input() tarifaTypeSelected: number;
  scheduler: scheduleModel;
  timeStart = {hour: 13, minute: 30};
  timeEnd = {hour: 13, minute: 30};
  constructor() {
  }

  ngOnInit(): void {
  }


}
