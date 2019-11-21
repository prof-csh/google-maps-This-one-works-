import { Component, Inject, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MeetingDialogComponent } from '../meeting-dialog/meeting-dialog.component';
import GoogleMapsLoader from 'google-maps';

declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(public dialog: MatDialog) {
    GoogleMapsLoader.KEY = 'AIzaSyBAyMH-A99yD5fHQPz7uzqk8glNJYGEqus';
  }

  @ViewChild('mapDiv') mapDiv: ElementRef;
  public map: google.maps.Map;
  private markers: google.maps.Marker[] = [];
  private clickListener: google.maps.MapsEventListener;

  initMap() {

    GoogleMapsLoader.load(g => {
      this.map = new google.maps.Map(this.mapDiv.nativeElement, {
        center: { lat: 51.921, lng: -10.037 },
        zoom: 8,
        disableDefaultUI: true
      });

    this.clickListener = this.map.addListener('click', (event) => {
      this.addMarker(event.latLng);
    });
    });
  }

  private addMarker(location) {
    let marker = new google.maps.Marker({
      position: location,
      map: this.map
    });
    this.markers.push(marker);
    this.showMeetingModal();
  }

  private showMeetingModal() {
    this.dialog.open(MeetingDialogComponent, {
    });
  }

  ngOnInit() {
    this.initMap();
  }
}
