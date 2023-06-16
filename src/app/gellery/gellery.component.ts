import { Component, Input } from '@angular/core';
import { GalleryI } from '../models/interface';

@Component({
  selector: 'app-gellery',
  templateUrl: './gellery.component.html',
  styleUrls: ['./gellery.component.css']
})
export class GelleryComponent {
  @Input() infoGallery!: GalleryI;
}
