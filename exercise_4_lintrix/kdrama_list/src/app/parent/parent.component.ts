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

  selectedKdramaIndex: number;
  isEditing: boolean = false;

  // Functions for adding, updating, and deleting Kdramas
  addKdrama() {
    const newKdrama: Kdrama = {
      title: this.title,
      lead_actor: this.lead_actor,
      lead_actress: this.lead_actress,
      year_released: this.year_released,
    };
    this.kdrama_library.push(newKdrama);
    this.clearInputs(); // Call clearInputs after adding a kdrama
  }
  
  deleteKdrama(index: number) {
    if (index >= 0 && index < this.kdrama_library.length) {
      this.kdrama_library.splice(index, 1);
    }
  }
  
  updateKdrama(index: number) {
    if (index >= 0 && index < this.kdrama_library.length) {
      this.title = this.kdrama_library[index].title;
      this.lead_actor = this.kdrama_library[index].lead_actor;
      this.lead_actress = this.kdrama_library[index].lead_actress;
      this.year_released = this.kdrama_library[index].year_released;
      this.selectedKdramaIndex = index;
      this.isEditing = true;
    }
  }

  confirmUpdate() {
    if (this.selectedKdramaIndex !== undefined) {
      this.kdrama_library[this.selectedKdramaIndex] = {
        title: this.title,
        lead_actor: this.lead_actor,
        lead_actress: this.lead_actress,
        year_released: this.year_released,
      };
      this.isEditing = false;
      this.clearInputs(); // Call clearInputs after confirming update
    }
  }

  clearInputs() {
    this.title = '';
    this.lead_actor = '';
    this.lead_actress = '';
    this.year_released = null;
  }  
}
