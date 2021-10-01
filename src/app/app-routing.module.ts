import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsBookingComponent } from './components-booking/components-booking.component';

const routes: Routes = [
  { path: "booking", component: ComponentsBookingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
