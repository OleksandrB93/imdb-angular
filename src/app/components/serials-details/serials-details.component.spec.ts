import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialsDetailsComponent } from './serials-details.component';

describe('SerialsDetailsComponent', () => {
  let component: SerialsDetailsComponent;
  let fixture: ComponentFixture<SerialsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerialsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SerialsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
