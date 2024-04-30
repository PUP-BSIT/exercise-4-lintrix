import { Component } from '@angular/core';
import { Kdrama } from '../../model/kdrama'; // Import the Kdrama type

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  title: string;
  lead_actor: string;
  lead_actress: string;
  year_released: number;

  kdrama_library: Kdrama[] = [
    {
      title: 'Crash Landing on You',
      lead_actor: 'Hyun Bin',
      lead_actress: 'Son Ye-jin',
      year_released: 2019,
    },
    {
      title: 'Goblin',
      lead_actor: 'Gong Yoo',
      lead_actress: 'Kim Go-eun',
      year_released: 2016,
    },
  ];
}