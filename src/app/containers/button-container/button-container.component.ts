import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-container',
  templateUrl: './button-container.component.html',
  styleUrl: './button-container.component.css'
})
export class ButtonContainerComponent {
  @Input() label: string = 'Button';
  @Input() type: string = 'Button';
  @Input() cantUse: boolean = false;
  // @Input() icon: string | null = null;
  @Input() btnClass: any = 'primary'
  @Input() isRounded: boolean = false;
  @Input() isOutlined: boolean = false;
  @Input() badgeCount: number = 2;
  @Input() btnSize: any = "small";

  @Output() clickMe = new EventEmitter<Event>();

  public clickFunction(event: Event) {
    this.clickMe.emit(event);
  }
}
