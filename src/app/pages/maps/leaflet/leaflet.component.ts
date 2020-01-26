import { Component } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus, NbButtonModule } from '@nebular/theme';


import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';

@Component({
  selector: 'ngx-leaflet',
  styleUrls: ['./leaflet.component.scss'],
  templateUrl: './leaflet.component.html',
  template: `
  


    <nb-card>
      <nb-card-header>Hero Buttons</nb-card-header>
      <nb-card-body>
        <div class="buttons-row">
        <button nbButton>sdgsgsg</button>
        
        </div>
      </nb-card-body>

 
      <nb-card-header>Leaflet Maps</nb-card-header>
     
      <nb-card-body>
        <div leaflet [leafletOptions]="options"></div>
      </nb-card-body>
    </nb-card>
  `,
})
export class LeafletComponent {

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
    ],
    zoom: 15,
    center: L.latLng({ lat: 6.8259, lng: 80.9982 }),
  };

  
}
