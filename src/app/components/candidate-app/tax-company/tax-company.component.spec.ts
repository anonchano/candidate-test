import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCompanyComponent } from './tax-company.component';

describe('BasicelementsComponent', () => {
  let component: TaxCompanyComponent;
  let fixture: ComponentFixture<TaxCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
