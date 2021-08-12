import {defaultModel, eventModel, scheduleModel} from "./intervalTypeModel";

export class tariffModel {
  id: number = 0;
  name: string= "";
  description: string= "";
  scheduleType: scheduleModel[];
  eventType: eventModel[];
  defaultType: defaultModel;
}
