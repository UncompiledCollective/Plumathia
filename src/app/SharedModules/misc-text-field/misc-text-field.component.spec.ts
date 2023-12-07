import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscTextFieldComponent } from './misc-text-field.component';

describe('MiscTextFieldComponent', () => {
  let component: MiscTextFieldComponent;
  let fixture: ComponentFixture<MiscTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiscTextFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiscTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
