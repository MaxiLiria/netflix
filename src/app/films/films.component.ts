import { Component, Input } from '@angular/core';
import { FilmsI } from '../models/interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {
  @Input() infoFilms!: FilmsI;
}
