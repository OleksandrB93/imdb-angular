import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BergerButtonComponent } from './berger-button.component';

describe('BergerButtonComponent', () => {
  let component: BergerButtonComponent;
  let fixture: ComponentFixture<BergerButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BergerButtonComponent],
    });
    fixture = TestBed.createComponent(BergerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
