import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { FirstsectionComponent } from '../firstsection/firstsection.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent,FirstsectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
