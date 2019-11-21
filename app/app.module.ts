import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MeetingDialogComponent } from './meeting-dialog/meeting-dialog.component';

import {
  MatButtonModule, MatFormFieldModule, MatDialogModule, MatListModule, MatCardModule,
  MatInputModule, MatProgressSpinnerModule, MatMenuModule,
  MatIconModule, MatDatepicker, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [BrowserModule, FormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule],
  entryComponents: [MeetingDialogComponent],
  declarations: [AppComponent, HelloComponent, MeetingDialogComponent, MapComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
