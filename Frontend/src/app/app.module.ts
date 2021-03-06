import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {MatIconModule} from '@angular/material/icon';
import {LoginService} from './services/login-service';
import {HttpClientModule} from '@angular/common/http';
import {MatChipsModule} from '@angular/material/chips';
import {Ng5SliderModule} from 'ng5-slider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ManagerGuard} from './guards/ManagerGuard';
import {EmployeeGuard} from './guards/EmployeeGuard';
import {UpdateEmployeeGuard} from './guards/UpdateEmployeeGuard';
import {ManagerService} from './services/manager-service';
import {MatRadioModule} from '@angular/material/radio';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import {EmployeeService} from './services/employee-service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    ManagerComponent,
    EmployeeUpdateComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatChipsModule,
    MatSnackBarModule,
    Ng5SliderModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatProgressSpinnerModule
  ],
  providers: [LoginService, ManagerGuard , EmployeeGuard , UpdateEmployeeGuard , ManagerService , EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
export interface Employee {
  _id: string;
  name: string;
  email:string;
  designation: string;
  salary: number;
  DOJ: Date;
  isManager:boolean;
  skills: string[];
}
