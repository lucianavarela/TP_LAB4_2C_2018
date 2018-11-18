/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Mesa } from 'src/app/classes/mesa';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { ComandaService } from 'src/app/services/comanda/comanda.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  is_logged: boolean = false;
  usuario: any;
  mesas: Array<Mesa>;
  mesa: string;
  public comandaId: string = '';
  public marker: google.maps.Marker;
  public currentLat: number;
  public currentLong: number;

  constructor(public auth: LoginService, public mesa_service: MesaService) {
    this.mesas = new Array<Mesa>();
  }

  ngOnInit() {
    this.is_logged = this.auth.isLogued();
    if (this.is_logged) {
      this.usuario = this.auth.getToken().data;
      if (this.usuario.sector == 'cocina') {
        this.usuario.sector = 'cocinaSector';
      }
    }
    this.mesa_service.traerMesas()
      .then(data => {
        this.mesas = Mesa.toMesa(data);
      })
      .catch(e => {
        console.info(e);
      });
    this.initMap();
  }

  initMap() {
    let mapProp = {
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.findMe();
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position) {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;

    let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        icon: "/assets/yo.png",
        title: 'Got you!'
      });
    }
    else {
      this.marker.setPosition(location);
    }
  }

  takeMe() {
    let component = this;
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(this.map);
    directionsService.route({
      origin: this.currentLat.toString() + ', ' + this.currentLong.toString(),
      destination: "-34.549776, -58.430145",
      travelMode: google.maps.TravelMode['DRIVING']
    }, function (response, status) {
      if (status.toString() == 'OK') {
        new google.maps.DirectionsRenderer({
          map: component.map,
          directions: response,
          suppressMarkers: true
        });
        var leg = response.routes[0].legs[0];
        component.makeMarker(leg.start_location, "/assets/yo.png", "Vos", component.map);
        component.makeMarker(leg.end_location, "/assets/end.png", 'Mi Comanda', component.map);
      }
    });
  }

  makeMarker(position, icon, title, map) {
    new google.maps.Marker({
      position: position,
      map: map,
      icon: icon,
      title: title
    });
  }

  estadoPedidos() {
    if (this.comandaId != '' && this.mesa != 'Seleccione su mesa') {
      ComandaService.instance.verEstado(this.mesa + '/' + this.comandaId);
    }
  }
}
