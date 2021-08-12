import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./components/create/create.component";
import {CalculateComponent} from "./components/calculate/calculate.component";

const routes: Routes = [
  {path:'create', component: CreateComponent},
  {path: 'calculate', component: CalculateComponent},
  {path: '', component: CreateComponent},
  {path: '**', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
