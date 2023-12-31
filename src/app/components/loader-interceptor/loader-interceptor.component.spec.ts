import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderInterceptorComponent } from './loader-interceptor.component';

describe('LoaderInterceptorComponent', () => {
  let component: LoaderInterceptorComponent;
  let fixture: ComponentFixture<LoaderInterceptorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderInterceptorComponent]
    });
    fixture = TestBed.createComponent(LoaderInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
