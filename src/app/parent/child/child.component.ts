import { Component, Input } from '@angular/core';
import { Kdrama } from '../../../model/kdrama'; // Import the Kdrama type

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() kdrama: Kdrama; // Input property of type Kdrama
}