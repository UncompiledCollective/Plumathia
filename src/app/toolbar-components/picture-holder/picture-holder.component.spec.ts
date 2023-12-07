import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureHolderComponent } from './picture-holder.component';

describe('PictureHolderComponent', () => {
  let component: PictureHolderComponent;
  let fixture: ComponentFixture<PictureHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureHolderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PictureHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
