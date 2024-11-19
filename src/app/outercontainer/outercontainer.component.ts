import { Component } from '@angular/core';
import { InnerItemComponent } from '../inneritem/inneritem.component';

@Component({
  selector: 'app-outercontainer',
  standalone: true,
  imports: [InnerItemComponent],
  templateUrl: './outercontainer.component.html',
  styleUrl: './outercontainer.component.css'
})
export class OuterContainerComponent {

}
