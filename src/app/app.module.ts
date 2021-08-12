import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableTariffComponent } from './components/table-tariff/table-tariff.component';
import { CreateComponent } from './components/create/create.component';
import { CalculateComponent } from './components/calculate/calculate.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TarifaTypesComponent } from './components/tarifa-types/tarifa-types.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    TableTariffComponent,
    CreateComponent,
    CalculateComponent,
    TarifaTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
