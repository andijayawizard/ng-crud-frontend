import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { CustomersAddComponent } from './components/customers/customers-add/customers-add.component';
import { CustomersDetailComponent } from './components/customers/customers-detail/customers-detail.component';
import { SiswaListComponent } from './components/siswa/siswa-list/siswa-list.component';
import { SiswaAddComponent } from './components/siswa/siswa-add/siswa-add.component';
import { SiswaDetailComponent } from './components/siswa/siswa-detail/siswa-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    CustomersListComponent,
    CustomersAddComponent,
    CustomersDetailComponent,
    SiswaListComponent,
    SiswaAddComponent,
    SiswaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
