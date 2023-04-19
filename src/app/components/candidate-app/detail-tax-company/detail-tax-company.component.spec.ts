import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTaxCompanyComponent } from './detail-tax-company.component';

describe('BasicelementsComponent', () => {
  let component: DetailTaxCompanyComponent;
  let fixture: ComponentFixture<DetailTaxCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTaxCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTaxCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
