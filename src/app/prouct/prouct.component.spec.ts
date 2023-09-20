import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuctComponent } from './prouct.component';

describe('ProuctComponent', () => {
  let component: ProuctComponent;
  let fixture: ComponentFixture<ProuctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProuctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProuctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
