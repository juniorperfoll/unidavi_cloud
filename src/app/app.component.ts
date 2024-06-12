import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CloudComponent } from './cloud/cloud.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CloudComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Unidavi Cloud';
}
