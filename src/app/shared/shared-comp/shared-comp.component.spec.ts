import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCompComponent } from './shared-comp.component';

describe('SharedCompComponent', () => {
  let component: SharedCompComponent;
  let fixture: ComponentFixture<SharedCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
