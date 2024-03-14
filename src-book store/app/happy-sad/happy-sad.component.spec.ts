import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappySadComponent } from './happy-sad.component';

describe('HappySadComponent', () => {
  let component: HappySadComponent;
  let fixture: ComponentFixture<HappySadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HappySadComponent]
    });
    fixture = TestBed.createComponent(HappySadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
