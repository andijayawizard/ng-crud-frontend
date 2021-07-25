import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

// additional
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { CustomersAddComponent } from './components/customers/customers-add/customers-add.component';
import { CustomersDetailComponent } from './components/customers/customers-detail/customers-detail.component';
import { SiswaListComponent } from './components/siswa/siswa-list/siswa-list.component';
import { SiswaAddComponent } from './components/siswa/siswa-add/siswa-add.component';
import { SiswaDetailComponent } from './components/siswa/siswa-detail/siswa-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },

  // additional
  { path: 'customers', component: CustomersListComponent },
  { path: 'customers-add', component: CustomersAddComponent },
  { path: 'customers/:id', component: CustomersDetailComponent },
  { path: 'siswa', component: SiswaListComponent },
  { path: 'siswa-add', component: SiswaAddComponent },
  { path: 'siswa/:id', component: SiswaDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
