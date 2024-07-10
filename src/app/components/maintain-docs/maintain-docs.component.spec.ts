import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainDocsComponent } from './maintain-docs.component';

describe('MaintainDocsComponent', () => {
  let component: MaintainDocsComponent;
  let fixture: ComponentFixture<MaintainDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintainDocsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaintainDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
