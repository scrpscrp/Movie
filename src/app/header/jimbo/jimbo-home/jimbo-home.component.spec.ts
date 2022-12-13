import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JimboHomeComponent } from './jimbo-home.component';

describe('JimboHomeComponent', () => {
  let component: JimboHomeComponent;
  let fixture: ComponentFixture<JimboHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JimboHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JimboHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
