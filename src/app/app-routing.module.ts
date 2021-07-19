import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { CustomersAddComponent } from './components/customers/customers-add/customers-add.component';
import { CustomersDetailComponent } from './components/customers/customers-detail/customers-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },

  // additional
  { path: 'customers', component: CustomersListComponent },
  { path: 'customers-add', component: CustomersAddComponent },
  { path: 'customers/:id', component: CustomersDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
