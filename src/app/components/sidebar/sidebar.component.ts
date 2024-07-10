import {
  Component,
  OnInit,
  Renderer2,
  Inject,
  Output,
  EventEmitter
} from '@angular/core';
import { personGif } from '../../../assets';
import { DOCUMENT } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface City {
  name: string;


  code: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  @Output() selectedComponentChange = new EventEmitter<string>();
  [x: string]: any;
  cities: City[] | undefined;  
  formGroup: FormGroup;
  public personGif = personGif;
  isSidebarToggled = false; // Tracks the toggle state
  isSidebarActive!: boolean;
  selectedComponent = ''; 
  selectedTitle = '';
  
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
    this.formGroup = new FormGroup({
      selectedCity: new FormControl<City | null>(null, Validators.required)
    });
  }
  ngOnInit(): void {
    this.cities = [
      { name: 'CY 2022-2023', code: 'NY' },
      { name: 'CY 2021-2022', code: 'RM' },
      { name: 'CY 2020-2021', code: 'LDN' },
      { name: 'CY 2019-2020', code: 'IST' },
      { name: 'CY 2018-2019', code: 'PRS' }
    ];
  }
  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  setActiveComponent(component: string, title: string) {
    this.selectedComponent = component;
    this.selectedTitle = title;
    this.selectedComponentChange.emit(component);

  }
}
