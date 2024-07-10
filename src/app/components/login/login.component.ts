import {
  Component,
  OnInit,
  Renderer2,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

// Image import here
import { company_logo } from '../../../assets';

// Interfaces
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public company_logo = company_logo; // Company logo image
  public company_name = "Account's Project";
  public email!: string;
  public inputs!: NodeListOf<HTMLInputElement>;
  public toggle_btn!: NodeListOf<HTMLButtonElement>;
  public main!: HTMLElement;
  public password: string = '';
  public showPassword: boolean = false;
  public cities: City[] | undefined;
  public selectedCity: City | undefined;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.inputs = document.querySelectorAll('.input-field');
      this.toggle_btn = document.querySelectorAll('.toggle');
      this.main = document.querySelector('main')!;

      // Ensure inputs and toggle_btn are not empty before using forEach
      if (this.inputs.length > 0) {
        this.inputs.forEach((inp) => {
          inp.addEventListener('focus', () => {
            inp.classList.add('active');
          });
          inp.addEventListener('blur', () => {
            if (inp.value !== '') return;
            inp.classList.remove('active');
          });
        });
      }

      if (this.toggle_btn.length > 0) {
        this.toggle_btn.forEach((btn) => {
          btn.addEventListener('click', () => {
            this.main.classList.toggle('sign-up-mode');
          });
        });
      }
    }

    this.cities = [
      { name: 'Super Admin', code: 'SA' },
      { name: 'Admin', code: 'AD' },
      { name: 'Editor', code: 'ED' },
      { name: 'Viewer', code: 'VI' },
    ];
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  navigateDashboard() {
    this.router.navigate(['/home']);
  }
}
