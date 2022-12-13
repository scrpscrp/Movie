import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheteToCompComponent } from './whete-to-comp.component';

describe('WheteToCompComponent', () => {
  let component: WheteToCompComponent;
  let fixture: ComponentFixture<WheteToCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheteToCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheteToCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
