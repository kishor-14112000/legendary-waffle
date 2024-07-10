import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdNarrationComponent } from './sd-narration.component';

describe('SdNarrationComponent', () => {
  let component: SdNarrationComponent;
  let fixture: ComponentFixture<SdNarrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SdNarrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdNarrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
