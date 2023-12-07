import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarBoxComponent } from './toolbar-box.component';

describe('ToolbarBoxComponent', () => {
  let component: ToolbarBoxComponent;
  let fixture: ComponentFixture<ToolbarBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolbarBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
