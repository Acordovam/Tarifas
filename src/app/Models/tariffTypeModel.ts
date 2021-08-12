export class fixedTariffModel {
  name= 'Tarifa fija';
  price = 0.00;
}

export class hourFractionModel {
  id: number;
  name: 'Hora / Fracción'
  priceHour: number;
  priceFraction: number;
}

export class rangeHoursModel {
  id: number = 0;
  name: 'Rango de horas'
  initRange: number;
  endRange: number;
  price: number;
}
