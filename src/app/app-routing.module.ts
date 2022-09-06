import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: '', redirectTo: 'new_meeting', pathMatch: 'full'},
  {path: 'new_meeting', component: FormComponent},
  {path: 'view_meetings', component: ListComponent},
  {path: 'update_meeting/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FormComponent, ListComponent]
