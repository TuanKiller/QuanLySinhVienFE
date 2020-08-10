import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsComponent } from './students/students.component';
import { StudentFormComponent } from './student-form/student-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
