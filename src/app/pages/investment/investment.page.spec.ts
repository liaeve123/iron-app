import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestmentPage } from './investment.page';

describe('InvestmentPage', () => {
  let component: InvestmentPage;
  let fixture: ComponentFixture<InvestmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
