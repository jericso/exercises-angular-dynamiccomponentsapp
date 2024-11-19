import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OuterContainerComponent } from './outercontainer/outercontainer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OuterContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dynamic-components-app';
}
