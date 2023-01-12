import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbaEdenComponent } from './proba-eden.component';

describe('ProbaEdenComponent', () => {
  let component: ProbaEdenComponent;
  let fixture: ComponentFixture<ProbaEdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbaEdenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbaEdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
