import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyfriendComponent } from './modifyfriend.component';

describe('ModifyfriendComponent', () => {
  let component: ModifyfriendComponent;
  let fixture: ComponentFixture<ModifyfriendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyfriendComponent]
    });
    fixture = TestBed.createComponent(ModifyfriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
