import { Component, Input } from '@angular/core';
import { Kdrama } from '../../../model/kdrama';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() kdrama: Kdrama;
}