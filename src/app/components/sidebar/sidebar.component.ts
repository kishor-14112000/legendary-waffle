import { Component } from '@angular/core';
import { company_logo } from '../../../assets';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {
  public company_logo = company_logo;
}
