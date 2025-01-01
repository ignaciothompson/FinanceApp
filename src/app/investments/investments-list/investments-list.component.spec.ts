import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsListComponent } from './investments-list.component';

describe('InvestmentsListComponent', () => {
  let component: InvestmentsListComponent;
  let fixture: ComponentFixture<InvestmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
