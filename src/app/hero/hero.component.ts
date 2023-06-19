import { Component, Input } from '@angular/core';
import { FilmsI, GalleryI } from '../models/interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
@Input() infoPopular!: GalleryI;

public mostrarSinopsis = false;
}
