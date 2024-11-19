import { Component, ViewContainerRef } from '@angular/core';
import { LeafComponent } from '../leaf/leaf.component';

@Component({
  selector: 'app-inneritem',
  standalone: true,
  imports: [],
  templateUrl: './inneritem.component.html',
  styleUrl: './inneritem.component.css',
})
export class InnerItemComponent {
  constructor(private viewContainer: ViewContainerRef) {}

  loadContent() {
    this.viewContainer.createComponent(LeafComponent);
  }
}
